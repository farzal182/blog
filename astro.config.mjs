import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: "https://farzal.space",
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});