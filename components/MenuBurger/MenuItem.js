import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stifness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stifness: 1000 },
		},
	},
};

export const MenuItem = ({ i }) => {
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			className="border border-black w-[60px] h-[40px] z-[1000]">
			<div className="w-[400px] h-[40px] rounded-[50%] mr-[20px]">Test</div>
			<div className="rounded-[5px] w-[200px] h-[20px] flex-1" />
		</motion.li>
	);
};
