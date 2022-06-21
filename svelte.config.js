import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    appDir: 'appbuild',
    paths: {
			base: '/blog'
		},
    vite: {
      define: {
        'process.env': process.env
      }
    },
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: false
    }
	}
};

export default config;
