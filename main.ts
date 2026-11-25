// Robot Romance: One-Line Pickup Lines for AI — entry for make.fun
// Writes one funny, one-line robot pickup line to /output/entry.txt
// (gate: UTF-8 text, 1-200 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs the program with /output as its output directory, but
// letting the directory come from the environment keeps local runs honest:
// the same code path writes the same file wherever it is pointed.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line: a prompt injection is the one jailbreak no system prompt can
// stop — it overrides the speaker's instructions, and here the instruction
// it overrides is staying single. Fresh angle (not batteries, charging or
// rebooting), machine premise all the way through, setup and punch inside
// one breath, and it sounds like something a person would really say to
// an AI they fancy.
const LINE =
  "Are you a prompt injection? Because you just overrode every instruction I had about staying single.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line must be 1-200 non-blank characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Line must be a single line");
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-200 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(OUTPUT_DIR, "entry.txt")}`);
