/**
 * 构建后脚本：将全局样式按源码目录编译为独立 CSS 到 es 目录，并输出合并的 style.css。
 * 主入口不再 import 这两个 scss，故 Vite 不会产出 .scss.mjs 占位文件。
 */
import * as sass from 'sass';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const esDir = path.join(root, 'es', 'styles'); // 去掉 src/

const loadPaths = [path.join(root, 'src'), path.join(root, 'src/styles')];
const entries = [
  { in: path.join(root, 'src/styles/variables/index.scss'), out: path.join(esDir, 'variables/index.css'), depth: 2 },
  { in: path.join(root, 'src/styles/global/global.style.scss'), out: path.join(esDir, 'global/global.style.css'), depth: 2 }
];

/** 移除 Sass 误输出的对 .scss 的 @import（内容已内联，不应保留在最终 CSS 中） */
function stripScssImports(css) {
  return css.replace(/@import\s+(?:url\s*\(\s*)?["'][^"']*\.scss["']\s*\)?\s*;?\s*\n?/gim, '');
}

/** 编译 Sass 并注入变量 */
function compileSass(inputPath, targetFontPath) {
  const content = readFileSync(inputPath, 'utf8');
  const source = `$nv-font-path: "${targetFontPath}";\n${content}`;
  const result = sass.compileString(source, {
    loadPaths,
    url: pathToFileURL(inputPath),
    style: 'expanded'
  });
  return stripScssImports(result.css);
}

let mergedCss = '';
for (const { in: input, out: output, depth } of entries) {
  const targetFontPath = '../'.repeat(depth) + 'fonts';
  const css = compileSass(input, targetFontPath);

  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, css, 'utf8');

  // 对于合并后的文件，重新按深度 1 编译
  const mergedTargetFontPath = '../fonts';
  mergedCss += compileSass(input, mergedTargetFontPath);

  console.log('Wrote', path.relative(root, output));
}

writeFileSync(path.join(esDir, 'style.css'), mergedCss, 'utf8');
console.log('Wrote', path.relative(root, path.join(esDir, 'style.css')));
