import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const writingRoot = join(root, 'src/content/writing');
const requiredFields = ['title', 'description', 'publishedAt', 'kind', 'minutes', 'topics', 'draft'];
const disallowedClaims = [
  /300\s*(million|m)\b/i,
  /approximately\s+250\b/i,
  /100,?000\s+transactions/i,
  /99\.99%/i,
  /double(?:d)?\s+revenue/i,
  /reduce(?:d)?\s+cost(?:s| of goods)?\s+by\s+60%/i,
  /customer base\s+by\s+40%/i,
];
const disallowedEmployerReferences = [/\bmicrosoft\b/i, /\bready\s*pulse\b/i, /\bvp of engineering\b/i];

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

const failures = [];

if (!existsSync(join(root, 'public/CNAME'))) failures.push('public/CNAME is missing');

for (const path of filesIn(writingRoot).filter((file) => ['.md', '.mdx'].includes(extname(file)))) {
  const source = readFileSync(path, 'utf8');
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) {
    failures.push(`${path}: missing frontmatter`);
    continue;
  }

  for (const field of requiredFields) {
    if (!new RegExp(`^${field}:`, 'm').test(frontmatter[1])) failures.push(`${path}: missing ${field}`);
  }

  if (/\b(?:lorem ipsum|todo|tbd)\b/i.test(source)) failures.push(`${path}: contains placeholder copy`);
  for (const claim of disallowedClaims) {
    if (claim.test(source)) failures.push(`${path}: contains an unapproved exact résumé metric`);
  }
}

for (const directory of ['src/pages', 'src/components', 'src/layouts']) {
  for (const path of filesIn(join(root, directory))) {
    const source = readFileSync(path, 'utf8');
    for (const reference of disallowedEmployerReferences) {
      if (reference.test(source)) failures.push(`${path}: contains an employer or current-title reference`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Content checks passed.');
