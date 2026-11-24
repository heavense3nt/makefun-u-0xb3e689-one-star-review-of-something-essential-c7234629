// One-Star Review of Something Essential — deadpan one-star review of sleep.
// Writes the entry to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
import { isAbsolute, join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sleep takes a third of my life and returns ten minutes of feeling rested, which expires before lunch.";

if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-160 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const dest = outDir
  ? isAbsolute(outDir)
    ? join(outDir, "entry.txt")
    : join(process.cwd(), outDir, "entry.txt")
  : join(process.cwd(), "out", "entry.txt");

mkdirSync(dest.slice(0, dest.lastIndexOf("/")), { recursive: true });
writeFileSync(dest, LINE, "utf8");
