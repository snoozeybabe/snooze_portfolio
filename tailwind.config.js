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
				darkYellow: '#FEDD00',
				ligthBlue: '#ADC1EA',
				lightGrey: 'rgba(170, 170, 170, 0.17)',
			},
			fontFamily: {
				sans: ['Futura', ...defaultTheme.fontFamily.sans],
			},
			blur: {
				xs: '2px',
			},
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translate(0, 4px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(0px, 0)',
					},
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease backwards',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
