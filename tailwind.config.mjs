import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e0aaff',
					200: '#c77dff',
					300: '#9d4edd',
					400: '#7b2cbf',
					500: '#5a189a',
					600: '#3c096c',
					700: '#240046',
					800: '#10002b',
				},
			},
			fontFamily: {
				sans: ['poppins', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
