import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite'
const { PUBLIC_HOSTNAME } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: `https://${PUBLIC_HOSTNAME}`,
	output: 'server',
	trailingSlash: 'never',
  integrations: [react(), tailwind()]
});