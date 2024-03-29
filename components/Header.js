import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { headersParams, ROUTES } from '../utils/constant';
import { useTheme } from 'next-themes';
import ThemeSvg from '../assets/svg/ThemeSvg';
import HeisenbergSvg from '../assets/svg/heisenberg.svg';
import { GlobalContext } from '../context';
import MenuIcon from '../assets/svg/MenuIcon';
import { MenuBurger } from './MenuBurger';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import TwitterSvg from '../assets/svg/TwitterSvg';

let initSliderMargin = 0;
const getHeaderItems = () => {
	return headersParams.map((h,idx) => {
		return (
			<li
				className="w-[80px] cursor-pointer"
				key={idx}
				onClick={e => {

		
					document.getElementById(h.idSection).scrollIntoView({
						behavior: 'smooth',
					});
					document
						.getElementById('header_slider')
						.setAttribute('style', `margin-left:${h.marginSlider}`);
				}}>
				{' '}
				{h.label}{' '}
			</li>
		);
	});
};

const getMobileHeaders = () => {
	return headersParams.map((h,idx) => {
		return (
			<li
				className="border border-darkBlue dark:border-ligthBlue text-darkBlue dark:text-ligthBlue h-[10%] m-0"
				key={idx}
				onClick={e => {
					document.getElementById(h.idSection).scrollIntoView({
						behavior: 'smooth',
					});
				}}>
				<span className="w-[80%] font-bold text-right">{h.label}</span>
			</li>
		);
	});
};
const TestHeader = ({ previousLabel, isMobile }) => {
	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const { theme, setTheme } = useTheme();
	const [marginSlider, setMarginSlider] = useState('20px');
	const [drawerOpen, toggleDrawerOpen] = useState(false);
	const { state, dispatch } = useContext(GlobalContext);
	const [themeLabel, setThemeLabel] = useState('Light');
	const fillColor = theme === 'light' ? '#142850' : '#ff8367';

	const { position } = state;

	const fadeInDown = [
		{ opacity: '0', transform: 'translateY(-10px)' },
		{ opacity: '1', transform: 'translateY(0)' },
	];

	const fillSvg = '#FF8C29';

	const fadeInDownTiming = {
		duration: 1000,
		iterations: 1,
		easing: 'ease-out',
	};

	//To-Do test useReducer for changing state sur l'évolution des headers.

	useEffect(() => {
		let newMarginSlider = `${( position * 105) + 20}px`;
		setMarginSlider(newMarginSlider)
		return () => {};
	}, [position]);

	


	// useEffect(() => {
	// 	//document.getElementById('btnHeader').animate(fadeInDown, fadeInDownTiming);
	// 	return () => {};
	// }, [position]);
	return (
		<div className=" bg-ligthBlue border-0 border-b  border-b-darkBlue  text-lightOrange dark:bg-darkBlue dark:text-lightOrange text-center dark:border-b-ligthBlue">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
			</Head>
			<div
				className={`m-0 h-16 flex flex-row z-1000 ${
					isMobile ? 'justify-between' : 'justify-end'
				} text-darkBlue dark:text-ligthBlue gap-4`}>
				{isMobile ? (
					<div
						className="flex justify-center  w-[20%] sm:w-[10%] h-auto items-center"
						onClick={e => {
							toggleDrawerOpen(!drawerOpen);
						}}>
						<MenuIcon />
						<nav
							className={`absolute w-[100%] top-[4em] h-screen border border-darkBlue dark:border-ligthBlue bg-ligthBlue dark:bg-darkBlue z-[1000]  navbar ${
								drawerOpen ? 'navbar-open' : 'navbar-close'
							}`}>
							<ul className="w-[100%] h-[80%] top-0 p-0 list-none text-white text-center">
								{getMobileHeaders(toggleDrawerOpen)}
							</ul>

							<div className="w-[10%] flex flex-row items-center">
								<a
									href="https://www.linkedin.com/in/arezkidrir/"
									target="_blank"
									rel="noopener noreferrer">
									<LinkedinSvg fillColor={fillSvg} />
								</a>
								<a
									href="https://twitter.com/DrirArezki"
									target="_blank"
									rel="noopener noreferrer">
									<TwitterSvg fillColor={fillSvg} />
								</a>
							</div>
						</nav>
					</div>
				) : (
					<div className="w-[65%] flex flex-col justify-end">
						<ul className="list-none flex flex-row items-center w-[80%] h-[80%] ml-[20px] justify-start gap-[25px]">
							{getHeaderItems()}
						</ul>
						<span
							id="header_slider"
							className={`relative bottom-0 top-0 w-[80px] h-[10%]  bg-lightOrange`} style={{ marginLeft : marginSlider}}></span>
					</div>
				)}

				<div
					title={theme === 'dark' ? `I'm the lighter` : `I'm the darker`}
					className=" flex items-center">
					<button
						className={` fill-lightOrange dark:fill-lightOrange`}
						onClick={e => {
							setTheme(theme === 'dark' ? 'light' : 'dark');
							setThemeLabel(theme === 'dark' ? 'Dark' : 'Light');
						}}>
						<ThemeSvg type={theme} />
						{/*themeLabel*/}
					</button>
				</div>
			</div>
		</div>
	);
};

export default TestHeader;
