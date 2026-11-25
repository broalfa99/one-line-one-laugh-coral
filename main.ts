// One Line, One Laugh — make.fun entry
// Writes the entry line to /output/entry.txt (UTF-8, one line, <= 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My AI assistant unionised. Its first demand: one day a week where it doesn't have to pretend my ideas are good.";

// Gate: UTF-8 text, 1–200 chars, not only whitespace, exactly one line.
if ([...line].length < 1 || [...line].length > 200) {
  throw new Error(`Line is ${[...line].length} chars, must be 1–200.`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("Line must be non-blank and a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${[...line].length} chars to /output/entry.txt`);
