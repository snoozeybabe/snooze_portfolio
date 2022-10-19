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

/* Hi there, I’m Drir Arezki. 32 yo Bordeaux France 🇫🇷. */

// position: absolute;
// width: 553px;
// height: 358px;
// left: 87px;
// top: 306px;

// font-family: 'Kanit';
// font-style: normal;
// font-weight: 300;
// font-size: 72px;
// line-height: 45px;
// /* or 62% */
// letter-spacing: 0.03em;

// color: #FEB139;

// mix-blend-mode: color-dodge;
// border: 2px solid #FEB139;
// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
