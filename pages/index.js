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

export default function Home() {
	const { theme, setTheme } = useTheme();
	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const [modScrollY, setModYScroll] = useState(0);

	const { state, dispatch } = useContext(GlobalContext);

	const prevRefModScroll = useRef();

	useEffect(() => {
		// console.log(ROUTES[modScrollY > 0 ? modScrollY - 1 : 0].path);
		// console.log(
		// 	ROUTES[modScrollY + 1] ? ROUTES[modScrollY + 1].path : '/contact'
		// );

		console.log(ROUTES[modScrollY].path);

		dispatch({
			type: 'UPDATE_ROUTE',
			payload: ROUTES[modScrollY + 1] ? ROUTES[modScrollY].path : '/contact',
		});
	}, [modScrollY]);
	const fillColor = theme === 'light' ? '#142850' : '#ff8367';
	const myRef = useRef();

	const scrollHandler = e => {
		setTimeout(() => {
			const scrollPos = e.target.scrollTop / myRef.current.offsetTop;
			setModYScroll(Math.floor(scrollPos));
		}, 1500);
	};
	useEffect(() => {
		document
			.getElementById('mainContainer')
			.addEventListener('scroll', scrollHandler);

		return () => {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<Layout>
			<div
				id="mainContainer"
				className="h-[100vh] w-[100%] bg-ligthBlue text-darkYellow dark:bg-darkBlue dark:text-lightYellow overflow-y-auto">
				<div className="h-[100%] relative overflow-y-auto">
					<Homepage />
				</div>
				<div className="h-[100%] relative overflow-y-auto" ref={myRef}>
					<About />
				</div>
				<div className="h-[100%] relative  overflow-y-auto">
					<Skills />
				</div>
				<div className="h-[100%] relative  overflow-y-auto">
					<Works />
				</div>
				<div className="h-[100%] relative  overflow-y-auto">
					<Contact />
				</div>
			</div>
		</Layout>
	);
}
