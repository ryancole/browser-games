// Builds the site for GitHub Pages: copies src/ to dist/, minifying each HTML
// page along with the CSS and JavaScript inside it. The games still run as-is
// straight from src/; this only makes the published pages smaller to download.
// (GitHub Pages gzips them on top of this.)
//
//   npm run build
import { minify } from "html-minifier-terser";
import fs from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";

const SRC = "src", OUT = "dist";

const options = {
  collapseWhitespace: true,
  conservativeCollapse: true, // keep a space where there was one, so inline text never runs together
  removeComments: true,
  minifyCSS: true,
  // Each page has its scripts inline, and nothing outside a script refers to
  // its top-level names (no inline onclick handlers), so those can be renamed too.
  minifyJS: { module: true, compress: { passes: 2 }, mangle: true },
};

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
const gz = (s) => zlib.gzipSync(s, { level: 9 }).length;

await fs.rm(OUT, { recursive: true, force: true });
let before = 0, after = 0;
for (const entry of await fs.readdir(SRC, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile()) continue;
  const from = path.join(entry.parentPath, entry.name);
  const to = path.join(OUT, path.relative(SRC, from));
  await fs.mkdir(path.dirname(to), { recursive: true });
  if (!entry.name.endsWith(".html")) { await fs.copyFile(from, to); continue; }
  const src = await fs.readFile(from, "utf8");
  const out = await minify(src, options);
  await fs.writeFile(to, out);
  const [a, b] = [gz(src), gz(out)];
  before += a; after += b;
  console.log(`${path.relative(SRC, from).replaceAll("\\", "/").padEnd(28)} ${kb(a).padStart(9)} -> ${kb(b).padStart(9)} gzipped`);
}
console.log(`${"total".padEnd(28)} ${kb(before).padStart(9)} -> ${kb(after).padStart(9)} gzipped`);
