import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Homepage from '../components/Home';
import profilImg from '../assets/img/IMAGE_ME.png';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Works from '../components/Works';
import React, { useState, useRef, useEffect, useContext } from 'react';
import TwitterSvg from '../assets/svg/TwitterSvg.js';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import ThemeSvg from '../assets/svg/ThemeSvg';
import HeisenbergSvg from '../assets/svg/heisenberg.svg';
import ArrowDown from '../assets/svg/ArrowDown';
import { useTheme } from 'next-themes';
import { ROUTES } from '../utils/constant';
import { GlobalContext } from '../context';
import useWindowSize from '../hooks/useWindowSize';
import { useScrollPosition } from '../hooks/useScrollPosition';




export default function Home() {
	const { theme, setTheme } = useTheme();
	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const [modScrollY, setModYScroll] = useState(0);
	const [scrollY, setScrollY] = useState(0);
	const size = useWindowSize();

	const { state, dispatch } = useContext(GlobalContext);

	const prevRefModScroll = useRef();

	const isMobile = size.width < 1020;

	useEffect(() => {
		dispatch({
			type: 'UPDATE_ROUTE',
			payload: ROUTES[modScrollY + 1] ? ROUTES[modScrollY].path : '/contact',
		});
		dispatch({
			type: 'UPDATE_SCREEN_POSITION',
			payload: modScrollY,
		});

	}, [modScrollY]);

	const fillColor = theme === 'light' ? '#142850' : '#ff8367';
	const myRef = useRef();

	const scrollHandler = e => {
		setTimeout(() => {
			const scrollPos = e.target.scrollTop / myRef.current.offsetTop;
			setModYScroll(Math.floor(scrollPos));
			setScrollY(scrollPos.toFixed(2));
		}, 1000);
	};
	useEffect(() => {
		document
			.getElementById('mainContainer')
			.addEventListener('scroll', scrollHandler, { passive: true });

		dispatch({
			type: 'UPDATE_SCREEN_SIZE',
			payload: isMobile,
		});

		return () => {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<Layout isMobile={isMobile}>
			<div
				id="mainContainer"
				className="h-[100vh] w-[100%] bg-ligthBlue text-darkBlue dark:bg-darkBlue dark:text-ligthBlue overflow-y-auto snap-mandatory snap-y">
				<section
					id="sec-home"
					className="h-[100%] relative overflow-y-auto snap-center">
					<Homepage />
				</section>

				<section
					className="h-[100%] relative overflow-y-auto snap-center"
					id="sec-about"
					ref={myRef}>
					<About isMobile={isMobile} position={scrollY} />
				</section>

				<section
					id="sec-skills"
					className="h-[100%] relative  overflow-y-auto snap-center">
					<Skills isMobile={isMobile} />
				</section>
				<section
					id="sec-works"
					className="h-[100%] relative  overflow-y-auto snap-center">
					<Works isMobile={isMobile} />
				</section>
				<section
					id="sec-contact"
					className="h-[100%] relative  overflow-y-auto snap-center">
					<Contact isMobile={isMobile} />
				</section>
			</div>
		</Layout>
	);
}
