import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ContextProvider } from '../context';
import { ThemeProvider } from 'next-themes';
import Lottie from 'react-lottie';
import animationLoading from '../assets/lotties/site-construction.json';
import TwitterSvg from '../assets/svg/twitter.svg';
import LinkedinSvg from '../assets/svg/linkedin.svg';
import Link from 'next/link';
import Head from 'next/head';

import useWindowSize from '../hooks/useWindowSize';

function MyApp({ Component, pageProps }) {
	const animationOptions = {
		loop: true,
		autoPlay: true,
		animationData: animationLoading,
		renderSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

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
					/>
				</Head>
				<div className="flex flex-col justify-center items-center text-lightYellow  dark:bg-darkBlue h-[100vh]">
					<Lottie
						options={animationOptions}
						height={animSize}
						width={size.width}
					/>
					<span>Coming soon ...</span>

					<a
						className="block text-center leading-[80px] border border-lightYellow mt-[15px] w-[200px] h-[80px] "
						href="mailto:contact@arezkidrir.fr">
						contact@arezkidrir.fr
					</a>

					<div className="flex flex-row items-center mt-[15px] w-[200px] justify-evenly">
						<a
							href="https://www.linkedin.com/in/arezkidrir/"
							target="_blank"
							rel="noopener noreferrer">
							<LinkedinSvg />
						</a>
						<a
							href="https://twitter.com/DrirArezki"
							target="_blank"
							rel="noopener noreferrer">
							<TwitterSvg />
						</a>
					</div>
				</div>

				{/*<Layout>
					<Component {...pageProps} />
	</Layout>*/}
			</ThemeProvider>
		</ContextProvider>
	);
}

export default MyApp;
