// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		// default options are shown
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		}),
		csp: {
			directives: {
			  "default-src": ["self", "open.spotify.com"],
			  "font-src":["self", "fonts.googleapis.com", "fonts.gstatic.com", 'data:'],
			  "base-uri": ["self"],
			  "script-src":["self", "https://*.googletagmanager.com", "nonce-6IMTsKGEqs8yPVMUecixvQ==", "sha256-2p5K5Q3RJPTM9V561KQIEdf0GtA4MsFHzl6Uw5nZPJU=", "nonce-H8ao/q8MSMnp6fkc1jZcEQ==", "sha256-Tg/P9WEb1uAq92zUAVNwJmeMv8krVSSBeJk6JcXx0tc="],
			  "style-src": ["self", "fonts.googleapis.com", "sha256-S8qMpvofolR8Mpjy4kQvEm7m1q8clzU4dfDH0AmvZjo=", "unsafe-hashes"],
			  "img-src": ["self", "https://*.googletagmanager.com", "https://*.google-analytics.com"],
			  "connect-src": ["self", "https://*.googletagmanager.com", "https://*.google-analytics.com", "https://*.analytics.google.com"],
			},
		  },
	}
};