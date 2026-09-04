import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { join } from 'node:path';

const contentDirectory = new URL('../../src/content/writing/', import.meta.url).pathname;

test('every published entry has a meaningful description and topic', () => {
  for (const file of readdirSync(contentDirectory).filter((name) => name.endsWith('.md'))) {
    const source = readFileSync(join(contentDirectory, file), 'utf8');
    const description = source.match(/^description:\s*["'](.+)["']$/m)?.[1] ?? '';
    assert.ok(description.length >= 20, `${file} needs a meaningful description`);
    assert.match(source, /^topics:\s*\[[^\]]+\]$/m, `${file} needs at least one topic`);
  }
});

test('public copy does not contain the superseded exact scale claims', () => {
  const combined = readdirSync(contentDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => readFileSync(join(contentDirectory, name), 'utf8'))
    .join('\n');
  assert.doesNotMatch(combined, /300\s*(million|m)|approximately\s+250|99\.99%|100,?000\s+transactions/i);
});
