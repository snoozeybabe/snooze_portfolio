import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ContextProvider } from '../context';
import { ThemeProvider } from 'next-themes';
import Lottie from 'react-lottie';
import animationLoading from '../assets/lotties/site-construction.json';

import Link from 'next/link';
import Head from 'next/head';

import useWindowSize from '../hooks/useWindowSize';

function MyApp({ Component, pageProps }) {
	const size = useWindowSize();

	const heightAnimation = sh => {
		switch (true) {
			case sh < 400:
				return 280;
				break;
			case sh > 400 && sh < 640:
				return 300;
				break;
			case sh >= 640 && sh <= 768:
				return 450;
				break;
			default:
				return 500;
				break;
		}
	};

	console.log(size.width);

	const animSize = heightAnimation(size.width);
	return (
		<ContextProvider>
			<ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
				<Head>
					<title>Arezki Drir</title>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
						crossOrigin="true"
					/>
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</ContextProvider>
	);
}

export default MyApp;
