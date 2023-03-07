import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ROUTES } from '../utils/constant';
import { useTheme } from 'next-themes';
import ThemeSvg from '../assets/svg/ThemeSvg';
import HeisenbergSvg from '../assets/svg/heisenberg.svg';
import { GlobalContext } from '../context';
import MenuIcon from '../assets/svg/MenuIcon';
const TestHeader = ({ previousLabel, isMobile }) => {
	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const { theme, setTheme } = useTheme();

	const { state, dispatch } = useContext(GlobalContext);
	const [themeLabel, setThemeLabel] = useState('Light');
	const fillColor = theme === 'light' ? '#142850' : '#ff8367';

	const fadeInDown = [
		{ opacity: '0', transform: 'translateY(-10px)' },
		{ opacity: '1', transform: 'translateY(0)' },
	];

	const fadeInDownTiming = {
		duration: 1000,
		iterations: 1,
		easing: 'ease-out',
	};

	useEffect(() => {
		return () => {};
	}, []);
	useEffect(() => {
		//document.getElementById('btnHeader').animate(fadeInDown, fadeInDownTiming);
		return () => {};
	}, [previousLabel]);
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
				className={`m-0 h-16 flex flex-row  ${
					isMobile ? 'justify-between' : 'justify-end'
				} text-darkBlue dark:text-ligthBlue gap-4`}>
				{isMobile ? (
					<div className="flex justify-center items-center ">
						{/*<MenuIcon />*/}
					</div>
				) : (
					<div className="w-[65%] flex flex-row justify-end">
						<ul className="list-none flex flex-row items-center w-[80%] justify-end gap-[25px]">
							<li>
								<a href="/">Welcome</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/">Skills</a>
							</li>
							<li>
								<a href="/">Works</a>
							</li>
							<li>
								<a href="/">Contact</a>
							</li>
						</ul>
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
