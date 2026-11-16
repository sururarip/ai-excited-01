// ai-excited-01 entry (Node 22, standard library only).
// The image beside this file is the entry: a lone surfer riding a wave
// that curls like a galaxy. This program copies it to /output/entry.png,
// the one file the gate reads and the judge sees. The file is JPEG bytes
// under the entry.png name, which the gate accepts (it tells PNG and JPEG
// apart by their first bytes).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
