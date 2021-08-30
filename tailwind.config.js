module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			blue: {
				light: '#63B3ED',
				DEFAULT: '#1fb6ff',
				navBlue: '#2D3748',
				dark: '#009eeb',
			},
			pink: {
				light: '#D53F8C',
			},
			white: ' #FFF',
		},

		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
