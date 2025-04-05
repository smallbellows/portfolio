import type { CollectionEntry } from 'astro:content';

export const sortWorkItems = (
    a: CollectionEntry<'work'>,
    b: CollectionEntry<'work'>
) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
