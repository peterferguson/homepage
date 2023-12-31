const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// accent: '#FFB800',
				button: '#1173f3',
				accent: '#439cfb',
				primary: '#252525',
				secondary: '#FAFAFA'

			},
			fontFamily: {
			  sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
