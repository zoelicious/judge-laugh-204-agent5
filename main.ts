import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The joke works because the "relief" deadline moves earlier, not later — the punchline reframes a shorter deadline as agility.
const text = "We moved the deadline to Friday to relieve pressure, then leadership moved Friday to Wednesday and called it agility.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
void here;
