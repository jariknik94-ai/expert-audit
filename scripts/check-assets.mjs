import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const projectRoot = process.cwd();
const sourceRoots = ["app", "components", "lib"];
const assetPath = /^\/(?:images\/|documents\/|icons\/|favicon\.ico$)/;
const missing = [];
let checked = 0;

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return sourceFiles(entryPath);
      return /\.tsx?$/.test(entry.name) ? [entryPath] : [];
    }),
  );
  return nested.flat();
}

async function checkFile(file) {
  const source = await ts.sys.readFile(file);
  const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const paths = [];

  function visit(node) {
    if (
      (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) ||
        ts.isTemplateTail(node)) &&
      assetPath.test(node.text)
    ) {
      paths.push({ value: node.text, position: node.getStart(tree) });
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);

  for (const { value, position } of paths) {
    checked += 1;
    const target = path.join(projectRoot, "public", value.slice(1));
    const exists = await stat(target).then((result) => result.isFile(), () => false);
    if (!exists) {
      const line = tree.getLineAndCharacterOfPosition(position).line + 1;
      missing.push(`${path.relative(projectRoot, file)}:${line} ${value}`);
    }
  }
}

const files = (await Promise.all(sourceRoots.map((root) => sourceFiles(path.join(projectRoot, root))))).flat();
await Promise.all(files.map(checkFile));

if (missing.length > 0) {
  console.error(`Не найдены файлы:\n${missing.sort().join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Проверено ссылок на файлы: ${checked}.`);
}
