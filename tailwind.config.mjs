/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: '0px',
				md: '640px',
				lg: '1025px',
			},
			colors: {
				'bg': 					"#F9F0DD",
				'div-bg': 				"#F5C99F",
				'header':				"#D97A4A",
				'paragraph-text': 		"#704D37",
				'button-bg': 			"#E7A474",
				'button-bg-hover': 		"#E49862",
				'button-text': 			"#7A4B2A",
				'faq-question-bg-hover':"#F5B684",
				'footer-bg': 			"#744D44",
				'footer-text': 			"#FFD6A5",
				'footer-link': 			"#FFC4A3",
				'footer-header': 		"#FAE3B4",
			  },
			  fontSize: {
				'4.5xl': '42px',
			  },
			  width: {
				'360px': '360px',
				'18vw': '18vw',
				'20.8vw': '20.8vw',
				'24vw': '24vw',
				'30vw': '30vw',
				'38vw': '38vw',
				'80vw': '80vw',
				'90vw': '90vw',
				'100vw': '100vw',
				'event_cards': '22vw',
				'event_cards_mobile': '60vw',
			  },
			  height: {
				'160px': '160px',
				'18vw': '18vw',
				'88vh': '88vh',
				'event_cards': '22vw',
				'event_cards_mobile': '60vw',
			  },
			  spacing: {
				'-20px': '-20px',
				'60px': '60px',
				'0.4vw': '0.4vw',
				'1vw': '1vw',
				'4vw': '4vw',
				'5vw': '5vw',
				'10vw': '10vw',
				'35vw': '35vw',
				'85vw': '85vw',
				'80%': '80%',
				'10%': '10%',
			  }
		},
	},
	plugins: [],
}
