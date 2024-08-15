/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'really-light-blue': '#D3E4FF',
				'light-blue': '#9AC3FF',
				'dark-gray': '#2f2f2f',
				'grayish-blue': '#a6b3c9',
				'background': '#263954;',
			  },
			  spacing: {
				'85vw': '85vw',
			  }
		},
	},
	plugins: [],
}
