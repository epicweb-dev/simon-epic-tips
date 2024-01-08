import { type Config } from 'tailwindcss'

export default {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				'paytone-one': ['Paytone One', 'sans-serif'],
			},
			keyframes: {
				slowpan: {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'100%': {
						transform: `translateX(-${(20 / 1.2).toFixed(2)}%) translateY(-${(
							20 / 1.2
						).toFixed(2)}%)`,
					},
				},
			},
			animation: {
				slowpan: 'slowpan 15s alternate ease-in-out infinite',
			},
		},
	},
} satisfies Config
