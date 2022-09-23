import adapter from '@sveltejs/adapter-auto';
import  sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	
	preprocess: [
		sveltePreprocess(),
		mdsvex({
      extensions: ['.md']
    })
	],
	
	kit: {
		adapter: adapter()
	}
};

export default config;
