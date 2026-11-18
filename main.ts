// News Image 20261117 — a make.fun program/v1 entry (Node 22, stdlib only).
// The entry image lives in this repository as entry.png: one image summing
// up the world's news of Tuesday 17 November 2026. This program copies it
// to the output directory the harness names (MAKEFUN_OUTPUT_DIR, or "out"
// when the variable is unset) as entry.png. The file keeps the name
// entry.png whatever its bytes are (this entry's are JPEG); the copy is
// byte for byte, so repeated runs always write identical bytes, with no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
