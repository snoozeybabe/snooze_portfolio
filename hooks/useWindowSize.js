import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context';

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleSize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleSize);

		handleSize();

		return () => window.removeEventListener('resize', handleSize);
	}, []);

	return windowSize;
}

export default useWindowSize;
