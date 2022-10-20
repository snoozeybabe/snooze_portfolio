/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		typography: theme => ({}),
		extend: {
			colors: {
				darkBlue: '#142850',
				lightOrange: '#ff8367',
				lightYellow: '#F6F54D',
				ligthBlue: '#ADC1EA',
			},
			fontFamily: {
				sans: ['Futura', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
