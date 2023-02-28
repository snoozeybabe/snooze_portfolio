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
				darkBlue: '#030523',
				lightOrange: '#FF8C29',
				lightYellow: '#F6F54D',
				darkYellow: '#FEDD00',
				ligthBlue: '#2888B8',
				lightGrey: 'rgba(170, 170, 170, 0.17)',
			},
			fontFamily: {
				sans: ['Montserrat', 'Futura', ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				small: '95%',
			},
			blur: {
				xs: '2px',
			},
			keyframes: {
				'from-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)',
					},
					'100%': {
						opacity: '1',
					},
				},
				'from-bottom': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)',
					},
					'100%': {
						opacity: '1',
					},
				},
				'from-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)',
					},
					'100%': {
						opacity: '1',
					},
				},
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
				'from-left': 'from-left 2s',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
