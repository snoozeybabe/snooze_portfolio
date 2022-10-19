import React, { Component, useState, useContext } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalContext } from '../context';
import { ROUTES } from '../utils/constant';

export default function Layout({ children }) {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	const { state, dispatch } = useContext(GlobalContext);
	const [themeLabel, setThemeLabel] = useState('Light');

	return (
		<div className="container-sm  relative flex flex-row h-screen overflow-hidden bg-ligthBlue text-darkBlue dark:bg-darkBlue dark:text-lightOrange">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			</Head>
			<div className="container-sm relative flex flex-col overflow-hidden  w-[100%]">
				<div className="m-0 h-16 flex flex-row ml-2 mr-2 text-lightYellow">
					<div className="w-[10%]"></div>
					<div className=" w-[70%] flex flex-row justify-center">
						<Link href="/" className="w-5">
							<button
								onClick={e => {
									dispatch({
										type: 'UPDATE_ROUTE',
										payload: router.pathname,
									});
								}}>
								Acceuil
							</button>
						</Link>
					</div>
					<div className="w-[20%] flex flex-end border border-red-800">
						<button
							className=" w-[50%]"
							onClick={e => {
								setTheme(theme === 'dark' ? 'light' : 'dark');
								setThemeLabel(theme === 'dark' ? 'Dark' : 'Light');
							}}>
							{themeLabel}
						</button>
					</div>
				</div>

				<div className="grow overflow-hidden h-auto flex flex-col ">
					{children}
				</div>
				<div className="m-0  h-16 flex flex-row ml-2 mr-2 text-lightYellow">
					<div className="w-[10%]">
						<span>Social</span>
					</div>
					<div className=" w-[70%] flex flex-row justify-center">
						<Link href="/about">
							<button
								onClick={e => {
									dispatch({
										type: 'UPDATE_ROUTE',
										payload: router.pathname,
									});
								}}>
								About
							</button>
						</Link>
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
