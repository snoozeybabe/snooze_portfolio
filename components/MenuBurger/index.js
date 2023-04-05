import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';

const sideBar = {
	open: (height = 2000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const MenuBurger = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const height = 500;

	return (
		<motion.nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}>
			<motion.div
				className="z-[1000] absolute top-0 left-0 bottom-0 w-[300px] bg-white"
				variants={sideBar}
			/>

			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};
