import React, { useState, useContext, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useTheme } from 'next-themes';
import { GlobalContext } from '../context';
const Layout = ({ isMobile, children }) => {
	const { theme, setTheme } = useTheme();
	const { state, dispatch } = useContext(GlobalContext);
	const [themeLabel, setThemeLabel] = useState('Light');
	const fillColor = theme === 'light' ? '#142850' : '#ff8367';


	useEffect(( ) => {
		console.log("Re render")
	}, [])
	return (
		<div className="flex flex-col h-screen overflow-hidden bg-ligthBlue text-darkBlue dark:bg-darkBlue dark:text-darkYellow">
			<Header isMobile={isMobile} />
			<div className="flex flex-1 flex-col overflow-y-auto relative">
				{children}
			</div>
			{isMobile ? null : (
				<Footer nextLabel={state.nextRouteName} actualRoute={state.routeName} />
			)}
		</div>
	);
};

export default Layout;
