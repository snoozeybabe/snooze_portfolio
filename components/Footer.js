import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import ArrowDown from '../assets/svg/ArrowDown';
import { useTheme } from 'next-themes';
import { ROUTES } from '../utils/constant';
import TwitterSvg from '../assets/svg/TwitterSvg.js';
const TestFooter = ({ nextLabel }) => {
	const { theme, setTheme } = useTheme();
	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const fillColor = theme === 'light' ? '#142850' : '#ff8367';

	const fadeInUp = [
		{ opacity: '0', transform: 'translate(0, 4px)' },
		{ opacity: '1', transform: 'translate(0px, 0)' },
	];

	const fadeInDownUp = {
		duration: 1000,
		iterations: 1,
		easing: 'ease-out',
	};

	useEffect(() => {
		document.getElementById('btnFooter').animate(fadeInUp, fadeInDownUp);
	}, [nextLabel]);
	return (
		<div className="m-0 h-16 bg-ligthBlue  border-0 border-t  border-t-darkBlue  text-darkBlue dark:bg-darkBlue dark:text-lightOrange text-center dark:border-t-lightOrange">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
			</Head>
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

				<div
					id="btnFooter"
					className="w-auto flex flex-col justify-around m-auto items-center pl-[115px]">
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
							{nextLabel !== null ? nextLabel : ''}
						</button>
					</Link>
					{nextLabel !== null ? <ArrowDown fillColor={fillColor} /> : null}
				</div>
				<div className="w-[20%]"></div>
			</div>
		</div>
	);
};

export default TestFooter;
