import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ROUTES } from '../utils/constant';
import { useTheme } from 'next-themes';
import ThemeSvg from '../assets/svg/ThemeSvg';
import HeisenbergSvg from '../assets/svg/heisenberg.svg';
import { GlobalContext } from '../context';
const TestHeader = ({ previousLabel }) => {
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
		document.getElementById('btnHeader').animate(fadeInDown, fadeInDownTiming);
		return () => {};
	}, [previousLabel]);

	return (
		<div className=" bg-ligthBlue border-0 border-b  border-b-darkBlue  text-darkBlue dark:bg-darkBlue dark:text-lightOrange text-center dark:border-b-lightOrange">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
			</Head>
			<div className="m-0 h-16 flex flex-row  text-darkBlue dark:text-lightOrange">
				<div className="w-[10%]"></div>
				<div className="w-[70%] flex flex-row justify-center">
					<Link href="#about" scroll={true} className="w-5">
						<button
							id="btnHeader"
							className="ml-[13%]"
							onClick={e => {
								// dispatch({
								// 	type: 'UPDATE_ROUTE',
								// 	payload: router.pathname,
								// });
								// setNextIdx(nextIndex - 1);
								// setPrevIdx(prevIndex === 0 ? 0 : prevIndex - 1);
							}}>
							{previousLabel !== null ? previousLabel : 'Welcome'}
						</button>
					</Link>
				</div>
				<div
					title={theme === 'dark' ? `I'm the lighter` : `I'm the darker`}
					className="w-[20%] flex flex-end justify-end">
					<button
						className={`w-[25%]f fill-darkBlue dark:fill-lightOrange`}
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
