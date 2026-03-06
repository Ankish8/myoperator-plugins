#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || process.cwd());
const marginResetRe = /\bm-0\b|\bmb-0\b|\bmy-0\b/;

function safeExists(target) {
  try {
    return fs.existsSync(target);
  } catch {
    return false;
  }
}

function collectComponentFiles() {
  const files = [];
  const uiDir = path.join(root, "src/components/ui");
  const customDir = path.join(root, "src/components/custom");

  if (safeExists(uiDir)) {
    for (const file of fs.readdirSync(uiDir)) {
      if (file.endsWith(".tsx") && !file.includes(".stories.") && !file.includes(".test.")) {
        files.push(path.join(uiDir, file));
      }
    }
  }

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (
        entry.name.endsWith(".tsx") &&
        !entry.name.includes(".stories.") &&
        !entry.name.includes(".test.")
      ) {
        files.push(fullPath);
      }
    }
  }

  if (safeExists(customDir)) {
    walk(customDir);
  }

  return files;
}

function checkFile(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const rel = path.relative(root, filePath);
  const violations = [];
  const lines = source.split("\n");
  const cvaBaseMap = {};

  const cvaRe = /const\s+(\w+)\s*=\s*cva\(\s*["'`]([^"'`]*)["'`]/g;
  let match;
  while ((match = cvaRe.exec(source)) !== null) {
    cvaBaseMap[match[1]] = match[2];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    if (!/\bp\s+className|\bp\s+ref\b|\bp\s*>/.test(line) && !/<p\s/.test(line)) {
      continue;
    }

    const chunk = lines.slice(i, Math.min(i + 3, lines.length)).join(" ");
    if (!/<p[\s>]/.test(chunk)) {
      continue;
    }

    const classNameMatch =
      chunk.match(/className=\{cn\(["'`]([^"'`]*)["'`]/) ||
      chunk.match(/className=["'`]([^"'`]*)["'`]/) ||
      chunk.match(/className=\{["'`]([^"'`]*)["'`]\}/);

    if (classNameMatch) {
      const classes = classNameMatch[1];
      if (!marginResetRe.test(classes)) {
        violations.push({
          file: rel,
          line: lineNum,
          message: `<p> element has className="${classes}" but is missing m-0 / mb-0 / my-0`,
        });
      }
      continue;
    }

    const variantMatch = chunk.match(/className=\{(\w+)\(/);
    if (variantMatch) {
      const variantName = variantMatch[1];
      if (cvaBaseMap[variantName] !== undefined && !marginResetRe.test(cvaBaseMap[variantName])) {
        violations.push({
          file: rel,
          line: lineNum,
          message: `<p> uses CVA variant "${variantName}" whose base classes "${cvaBaseMap[variantName]}" are missing m-0 / mb-0 / my-0`,
        });
      }
      continue;
    }

    if ((/<p\s*>/.test(chunk) || /<p\s+ref=/.test(chunk)) && !chunk.includes("className")) {
      violations.push({
        file: rel,
        line: lineNum,
        message: "<p> element has no className — missing m-0 for Bootstrap compat",
      });
    }
  }

  return violations;
}

const files = collectComponentFiles();

if (files.length === 0) {
  console.log("✓ Bootstrap compat check skipped — no matching component directories found");
  process.exit(0);
}

const violations = files.flatMap(checkFile);

if (violations.length === 0) {
  console.log("✓ Bootstrap compat check passed — all <p> elements have margin reset");
  process.exit(0);
}

console.error("\n✗ Bootstrap compat check FAILED\n");
console.error(
  "Bootstrap sets `p { margin-bottom: 1rem }` globally.\n" +
    "All <p> elements in component files must have m-0 (or mb-0/my-0) to prevent layout bleed.\n"
);

for (const violation of violations) {
  console.error(`  ${violation.file}:${violation.line}`);
  console.error(`    ${violation.message}\n`);
}

console.error(`${violations.length} violation(s) found.`);
console.error("Add m-0 to the <p> className (inline) or to the CVA base string.\n");
process.exit(1);
