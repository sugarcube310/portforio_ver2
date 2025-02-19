import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
      entries: ['*'] // すべてのページを静的に生成
    }
	}
}

export default config
