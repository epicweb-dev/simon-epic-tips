import { type Config } from 'tailwindcss'

export default {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				'paytone-one': ['Paytone One', 'sans-serif'],
			},
			keyframes: {
				'slowpan-2': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'100%': {
						transform: `translateX(-${(20 / 1.2).toFixed(2)}%) translateY(-${(
							20 / 1.2
						).toFixed(2)}%)`,
					},
				},
				slowpan: {
					'0%': { backgroundPosition: 'top left' },
					'100%': { backgroundPosition: 'bottom right' },
				},
			},
			animation: {
				slowpan: 'slowpan 15s alternate ease-in-out infinite',
				'slowpan-2': 'slowpan-2 15s alternate ease-in-out infinite',
			},
		},
	},
} satisfies Config
