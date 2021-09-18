const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: '#294365',

			blue: {
				light: '#4d9fe2',
				DEFAULT: '#1fb6ff',
				navBlue: '#2D3748',
				dark: '#009eeb',
				primary: '#2C5282',
				sidebarBg: '#edf2f8',
			},
			pink: {
				light: '#D53F8C',
			},
			status: {
				Published: '#a5e8bd',
				Draft: '#fc8180',
				Schedule: '#f6ad54',
			},
			white: ' #FFF',
			main: {
				light: '#b3bcf5',
				DEFAULT: '#5c6ac4',
				dark: '#202e78',
				subtitle: '#c0cad7',
			},
		},
		screens: {
			xs: {min: '0px', max: '394px'},
			sm: {min: '395px', max: '767px'},
			md: {min: '768px', max: '1023px'},
			lg: {min: '1024px'},
			// xl: {min: '1280px', max: '1535px'},
		},

		extend: {
			textColor: ['active'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
