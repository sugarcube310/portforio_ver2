import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
      entries: ['*']
    }
	},
	preprocess: sveltePreprocess({
    scss: {}
  })
};

export default config;
