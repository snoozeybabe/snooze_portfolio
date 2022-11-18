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
import React, { useState } from 'react';
import TwitterSvg from '../assets/svg/TwitterSvg.js';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import ThemeSvg from '../assets/svg/ThemeSvg';
import HeisenbergSvg from '../assets/svg/heisenberg.svg';
import ArrowDown from '../assets/svg/ArrowDown';
import { useTheme } from 'next-themes';
import { ROUTES } from '../utils/constant';

/* Hi there, I’m Drir Arezki. 32 yo Bordeaux France 🇫🇷. */

// mix-blend-mode: color-dodge;
// border: 2px solid #FEB139;
// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

export default function Home() {
	const { theme, setTheme } = useTheme();

	const [nextIndex, setNextIdx] = useState(1);
	const [prevIndex, setPrevIdx] = useState(0);
	const fillColor = theme === 'light' ? '#142850' : '#ff8367';
	return (
		<Layout>
			<div className="h-auto w-[100%] bg-ligthBlue text-darkBlue dark:bg-darkBlue dark:text-lightOrange overflow-y-auto">
				<div className="h-[100%] relative overflow-y-auto">
					<Homepage />
				</div>
				<div className="h-[100%] relative  overflow-y-auto">
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
