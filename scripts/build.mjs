// Build script: bundles src/main.jsx (+ its CSS imports) into dist/, and
// copies public/ alongside it. No framework-specific CLI required — just
// esbuild, so `npm install && npm run build` is all CI needs to run.

import esbuild from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(ROOT, "dist");

const watch = process.argv.includes("--watch");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

async function main() {
  fs.rmSync(DIST, { recursive: true, force: true });
  copyDir(PUBLIC, DIST);

  const buildOptions = {
    entryPoints: {
      bundle: path.join(SRC, "main.jsx"),
    },
    outdir: DIST,
    bundle: true,
    minify: !watch,
    sourcemap: watch,
    target: ["es2020"],
    jsx: "automatic",
    loader: { ".js": "jsx" },
    define: { "process.env.NODE_ENV": watch ? '"development"' : '"production"' },
    logLevel: "info",
  };

  if (watch) {
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    console.log("Watching for changes...");
  } else {
    await esbuild.build(buildOptions);
    console.log(`Build complete -> ${path.relative(process.cwd(), DIST)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
