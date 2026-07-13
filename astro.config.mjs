// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// TODO: 独自ドメイン接続後は site を実ドメインに、base を '/' に変更する
export default defineConfig({
  site: 'https://takahi72.github.io',
  base: '/natsume-jutaku-website/',
  integrations: [sitemap()],
});
