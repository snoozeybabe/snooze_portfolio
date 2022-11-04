import React, { Component, useState, useContext } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalContext } from '../context';
import { ROUTES } from '../utils/constant';
import TwitterSvg from '../assets/svg/TwitterSvg.js';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import ThemeSvg from '../assets/svg/ThemeSvg';
import HeisenbergSvg from '../assets/svg/heisenberg.svg';
import ArrowDown from '../assets/svg/ArrowDown';

export default function Layout({ children }) {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const { state, dispatch } = useContext(GlobalContext);
	const [themeLabel, setThemeLabel] = useState('Light');

	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);

	const fillColor = theme === 'light' ? '#142850' : '#ff8367';

	return (
		<div className="container-sm  relative flex flex-row h-screen overflow-hidden bg-ligthBlue text-darkBlue dark:bg-darkBlue dark:text-lightOrange">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
			</Head>
			<div className="container-sm relative flex flex-col overflow-hidden  w-[100%]">
				<div className="m-0 h-16 flex flex-row ml-2 mr-2 text-darkBlue dark:text-lightOrange">
					<div className="w-[10%]"></div>
					<div className=" w-[70%] flex flex-row justify-center">
						<Link href={ROUTES[prevIndex].path} className="w-5">
							<button
								onClick={e => {
									dispatch({
										type: 'UPDATE_ROUTE',
										payload: router.pathname,
									});
									setNextIdx(nextIndex - 1);
									setPrevIdx(prevIndex === 0 ? 0 : prevIndex - 1);
								}}>
								{ROUTES[prevIndex].routeName}
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

				<div className="grow overflow-hidden h-auto flex flex-col ">
					{children}
				</div>
				<div className="m-0  h-16 flex flex-row ml-2 mr-2 text-darkBlue dark:text-lightOrange">
					<div className="w-[10%] flex flex-row items-center">
						<a
							href="https://www.linkedin.com/in/arezkidrir/"
							target="_blank"
							rel="noopener noreferrer">
							<LinkedinSvg fillColor={fillColor} />
						</a>
						<a
							href="https://twitter.com/DrirArezki"
							target="_blank"
							rel="noopener noreferrer">
							<TwitterSvg fillColor={fillColor} />
						</a>
					</div>

					<div className="w-auto flex flex-col justify-around m-auto items-center blur-xs hover:filter-none">
						<Link
							href={
								ROUTES[nextIndex] && ROUTES[nextIndex].path !== ''
									? ROUTES[nextIndex].path
									: ''
							}>
							<button
								onClick={e => {
									dispatch({
										type: 'UPDATE_ROUTE',
										payload: router.pathname,
									});

									dispatch({
										type: 'UPDATE_LEVEL',
										payload: router.pathname,
									});
									setPrevIdx(nextIndex === 1 ? 0 : prevIndex + 1);
									setNextIdx(nextIndex + 1);
								}}>
								{ROUTES[nextIndex] && ROUTES[nextIndex].routeName !== ''
									? ROUTES[nextIndex].routeName
									: ''}
							</button>
						</Link>
						{ROUTES[nextIndex] && ROUTES[nextIndex].routeName !== '' ? (
							<ArrowDown fillColor={fillColor} />
						) : null}
					</div>
					<div className="w-[20%]"></div>
				</div>
			</div>

			{/*<div className="container-sm w-auto ">
				<p>Nav left</p>
						</div>*/}
		</div>
	);
}
