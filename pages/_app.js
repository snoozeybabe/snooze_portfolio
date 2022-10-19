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

function MyApp({ Component, pageProps }) {
	const animationOptions = {
		loop: true,
		autoPlay: true,
		animationData: animationLoading,
		renderSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<ContextProvider>
			<ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
				<div className="flex flex-col justify-center items-center text-lightYellow  dark:bg-darkBlue h-[100vh]">
					<Lottie options={animationOptions} height={600} width={600} />
					<span>Coming soon ...</span>
					<button className="border border-lightYellow mt-[15px] w-[200px] h-[80px]">
						contact@arezkidrir.fr
					</button>
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
