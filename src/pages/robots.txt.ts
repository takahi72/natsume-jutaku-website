import type { APIRoute } from 'astro';
import { withBase } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(withBase('/sitemap-index.xml'), site);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.toString()}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
