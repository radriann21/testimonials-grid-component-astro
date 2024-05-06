/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-moderate-violet': 'hsl(263, 55%, 52%)',
				'primary-very-dark-g-blue': 'hsl(217, 19%, 35%)',
				'primary-very-dark-b-blue': 'hsl(219, 29%, 14%)',
				'neutral-light-gray': 'hsl(0, 0%, 81%)',
				'neutral-light-g-blue': 'hsl(210, 46%, 95%)'
			},
			fonts: {
				'display': 'Barlow Semi Condensed'
			}
		},
	},
	plugins: [],
}
