import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { byNewest, isPublished } from '../lib/writing';

export async function GET(context) {
  const entries = (await getCollection('writing')).filter(isPublished).sort(byNewest);
  return rss({
    title: 'NandLabs',
    description: 'Writing about engineering systems, products, organizations, and ideas worth testing.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: entry.data.externalUrl ?? `/writing/${entry.id}`,
      categories: entry.data.topics,
    })),
  });
}
