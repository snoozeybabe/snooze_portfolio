import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CloseIconSvg } from '../assets/svg/SkillsSvg';
import { dailyIcons, andIcons } from '../utils/constant';
import reportingComptability from '../assets/img/reporting_v_compt.png';
import reportingDashboard from '../assets/img/reporting_dashboard.png';
import reportingProduct from '../assets/img/reporting_v_product.png';
import reportingArcplan from '../assets/img/reporting_arcplan.png';
import reactSorami from '../assets/img/react_sorami.jpeg';
import Image from 'next/image';
export default function Skills({ isMobile }) {
	const [openDrawer, setOpenDrawer] = useState(false);

	const [selectedSkill, setSelectedSkill] = useState({
		title: '',
		description: '',
		url: '',
	});

	useEffect(() => {}, [openDrawer]);

	const variants = {
		closed: {
			bottom: '-50%',
			display: 'none',
			opacity: 0,
			position: 'fixed',
			width: '100%',
			zIndex: '99',
		},
		open: {
			display: 'block',
			bottom: 0,
			opacity: 1,
			position: 'fixed',
			width: '100%',
			zIndex: '199',
		},
	};

	const getDailyCards = cardDatas => {
		return cardDatas.map((ic, idx) => {
			return (
				<React.Fragment>
					{isMobile ? (
						<div
							key={idx + 40}
							className="sm:max-w-[90px] sm:h-[90px] md:max-w-[120px] md:h-[120px] relative border border-darkBlue dark:border-lightOrange   flex flex-row items-center"
							onClick={e => {
								setSelectedSkill({
									title: ic.title,
									url: ic.url,
									description: ic.description,
								});
								setOpenDrawer(!openDrawer);
							}}>
							{' '}
							<div className="w-[80px] h-[80px] md:w-[80px] md:h-[80px] mx-[24px] my-[20px]">
								{ic.icon}
							</div>
						</div>
					) : (
						<div
							key={idx + 40}
							className="group cursor-pointer  md:max-w-[120px] md:h-[120px] items-center relative border   border-lightOrange dark:border-lightOrange  flex flex-row fade-in-up "
							onClick={e => {}}>
							{' '}
							<a href={ic.url} target="_blank">
								<div className=" relative flex flex-col items-center">
									<div className="w-[80px] h-[80px] mx-[24px] my-[5px] ">
										{ic.icon}
									</div>
									<span>{`<${ic.title}/>`}</span>
								</div>
							</a>
						</div>
					)}
				</React.Fragment>
			);
		});
	};

	let imgList = [
		reportingDashboard,
		reportingProduct,
		reportingComptability,
		reportingArcplan,
		reactSorami,
	];

	const getProjectsScreens = () => {
		return imgList.map((imgComponent, idx) => (
			<div
				key={idx + 200}
				className=" relativeborder border-darkBlue dark:border-ligthBlue w-[300px] h-[150px]">
				<Image src={imgComponent} fill="true" objectFit="contain" />
			</div>
		));
	};

	return (
		<React.Fragment>
			<div
				className={`grow container-sm ${
					isMobile ? 'h-[80%]' : 'h-[100%]'
				} flex flex-col justify-evenly  ${openDrawer ? 'opacity-50' : ''} `}>
				<div className="h-1/2 flex flex-col justify-evenly sm:justify-between mt-2 bg-transparent items-center overflow-hidden gap-4">
					<span className="text-3xl mt-[2px] ml-[12px] text-center font-bold">
						I'm Daily Using
					</span>
					<div className="dark:scollableList w-[100%]  overflow-scroll flex sm:flex-row sm:flex-wrap sm:justify-center gap-4  scrollbar-hide ml-[12px] bg-transparent  sm:overflow-y-hidden">
						{getDailyCards(dailyIcons)}
					</div>
				</div>
				<div className="h-1/2 flex flex-col justify-evenly bg-transparent ">
					<span className="text-3xl mt-[2px] ml-[12px] text-center font-bold">
						To Make This
					</span>
					<div className=" dark:scollableList w-[95%] flex flex-nowrap gap-4 overflow-scroll scrollbar-hide ml-[12px] bg-transparent overflow-y-hidden">
						<div className="relative flex gap-6 flex-row">
							{getProjectsScreens()}
						</div>
					</div>
				</div>
			</div>
			<motion.div
				variants={variants}
				animate={openDrawer ? 'open' : 'closed'}
				initial="closed">
				<div
					className={`fixed h-[30%] bottom-0 left-0  w-[100%] dark:text-darkBlue dark:bg-lightYellow opacity-100`}
					onClick={e => {
						setOpenDrawer(!openDrawer);
					}}>
					<div
						className=" h-[20%] w-[100%] p-[15px] flex items-center justify-center "
						onClick={e => {
							setOpenDrawer(!openDrawer);
						}}>
						<CloseIconSvg />
					</div>
					<div className=" w-[100%] h-[80%] align-center items-center transition-all duration-700 delay-1 ease-in-out  duration-10 p-[10px] relative px-[9px]  flex flex-col justify-start overflow-hidden">
						<a href={selectedSkill.url} target="_blank">
							<span className="text-darkBlue text-[35px]">
								{' '}
								{`<${selectedSkill.title}/>`}
							</span>
						</a>
						<p className="text-[22px] text-darkBlue mt-[12px] text-center">
							{' '}
							{selectedSkill.description}
						</p>
					</div>
				</div>
			</motion.div>
		</React.Fragment>
	);
}
