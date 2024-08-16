/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'really-light-blue': '#D3E4FF',
				'light-blue': '#9AC3FF',
				'pale-sky-blue': '#99C2FF',
				'dark-gray': '#2f2f2f',
				'grayish-blue': '#a6b3c9',
				'background': '#263954;',
				'soft-peach': '#FFF2DE',
				'steel-blue': '#2E548E',
				'midnight-slate': '#39537A',
				'frosted-blue': '#76ADFF'
			  },
			  width: {
				'24vw': '24vw',
			  },
			  height: {
				'18vw': '18vw'
			  },
			  spacing: {
				'0.4vw': '0.4vw',
				'85vw': '85vw',
			  }
		},
	},
	plugins: [],
}
