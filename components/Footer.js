import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import ArrowDown from '../assets/svg/ArrowDown';
import { useTheme } from 'next-themes';
import { ROUTES } from '../utils/constant';
import TwitterSvg from '../assets/svg/TwitterSvg.js';
import { motion } from 'framer-motion';
const TestFooter = ({ nextLabel, actualRoute }) => {
	const { theme, setTheme } = useTheme();
	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const fillColor = theme === 'light' ? '#030523' : '#2888B8';
	const fillSvg = '#FF8C29';

	const variantsBis = {
		initial: { y: 10, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 20, opacity: 0 },
		transition: { delay: 1, duration: 0.2, type: 'tween' },
	};

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
		const btnFooterElement = document.getElementById('btnFooter');
		if (btnFooterElement) {
			document.getElementById('btnFooter').animate(fadeInUp, fadeInDownUp);
		}

		console.log(actualRoute);
	}, [nextLabel]);
	return (
		<React.Fragment>
			<div className="m-0 h-16 bg-ligthBlue   text-darkBlue dark:bg-darkBlue dark:text-lightOrange text-center">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
				</Head>
				<div className="m-0  h-16 flex flex-row ml-2 mr-2 text-darkBlue dark:text-ligthBlue">
					<motion.div
						variants={variantsBis}
						animate={nextLabel !== null ? 'animate' : 'exit'}>
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
					</motion.div>
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
								{nextLabel}
							</button>
						</Link>
						{nextLabel !== null ? <ArrowDown fillColor={fillColor} /> : null}
					</div>
					<div className="w-[20%]"></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TestFooter;
