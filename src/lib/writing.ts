import type { CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

export function byNewest(a: WritingEntry, b: WritingEntry) {
  return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
}

export function isPublished(entry: WritingEntry) {
  return !entry.data.draft && entry.data.publishedAt <= new Date();
}

export function entryHref(entry: WritingEntry) {
  return entry.data.externalUrl ?? `/writing/${entry.id}`;
}

export function readingLabel(entry: WritingEntry) {
  return entry.data.externalUrl ? 'Read elsewhere' : 'Read';
}

export function formatHref(kind: WritingEntry['data']['kind']) {
  return `/${kind === 'essay' ? 'essays' : `${kind}s`}`;
}
