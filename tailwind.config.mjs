/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'really-light-blue':'#D3E4FF',
				'light-blue': 		'#9AC3FF',
				'pale-sky-blue': 	'#99C2FF',
				'dark-gray': 		'#2f2f2f',
				'grayish-blue': 	'#a6b3c9',
				'background': 		'#263954',
				'soft-peach': 		'#FFF2DE',
				'steel-blue': 		'#2E548E',
				'midnight-slate': 	'#39537A',
				'frosted-blue': 	'#76ADFF',
				'marine-sapphire': 	'#2E548E',
				'frosted-sky': 		'#99C2FF',
				'icy-mist': 		'#D3E4FF',
			  },
			  fontSize: {
				'4.5xl': '42px',
			  },
			  width: {
				'360px': '360px',
				'24vw': '24vw',
				'90vw': '90vw',
			  },
			  height: {
				'160px': '160px',
				'18vw': '18vw',
			  },
			  spacing: {
				'-20px': '-20px',
				'60px': '60px',
				'0.4vw': '0.4vw',
				'4vw': '4vw',
				'5vw': '5vw',
				'85vw': '85vw',
				'80%': '80%',
				'10%': '10%',
			  }
		},
	},
	plugins: [],
}
