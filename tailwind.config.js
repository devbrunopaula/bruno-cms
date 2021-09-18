const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			// current: 'currentColor',

			blue: {
				light: '#f7fafc',
				DEFAULT: '#1fb6ff',
				navBlue: '#2D3748',
				dark: '#009eeb',
				primary: '#2C5282',
				sidebarBg: '#edf2f8',
			},
			pink: {
				light: '#D53F8C',
			},
			white: ' #FFF',
			test: {
				light: '#b3bcf5',
				DEFAULT: '#5c6ac4',
				dark: '#202e78',
			},
		},
		screens: {
			xs: {min: '0px', max: '394px'},
			sm: {min: '395px', max: '767px'},
			md: {min: '768px', max: '1023px'},
			lg: {min: '1024px'},
			// xl: {min: '1280px', max: '1535px'},
		},

		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
