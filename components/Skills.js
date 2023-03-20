import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
	MySqlSvg,
	DataGripSvg,
	TailwindSvg,
	CubeJsSvg,
	ArcplanSvg,
	ReactSvg,
	DockerSvg,
	GitlabSvg,
	PythonSvg,
	ExcelSvg,
	NextJsSvg,
	FigmaSvg,
	ReduxSvg,
	CloseIconSvg,
} from '../assets/svg/SkillsSvg';

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

	const dailyIcons = [
		{
			icon: <MySqlSvg />,
			title: 'MySql',
			description: "Of course i'm a data analyst",
			url: 'https://www.mysql.com/',
		},
		{
			icon: <CubeJsSvg />,
			title: 'CubeJs',
			description:
				'This powerful tool helps me to aggregating, quering and displying datas',
			url: 'https://cube.dev',
		},
		{
			icon: <ArcplanSvg />,
			title: 'Arcplan',
			description: 'The BI software to generate all the reports',
			url: 'https://insightsoftware.com/longview/longview-analytics/',
		},
		{
			icon: <DataGripSvg />,
			title: 'DataGrip',
			description: 'Perfect IDE for creating amazing SQL queries',
			url: 'https://www.jetbrains.com/datagrip/',
		},
		{
			icon: <ReactSvg />,
			title: 'ReactJs',
			description:
				'The fullstack part, mixing BI software and react to create beautiful dashboard',
			url: 'https://reactjs.org/',
		},
		{
			icon: <DockerSvg />,
			title: 'Docker',
			description:
				'Shipping and deploying dashboards and report easily to customers ',
			url: 'https://www.docker.com',
		},
		{
			icon: <GitlabSvg />,
			title: 'Gitlab',
			description: 'Everthing need to be build and controlled',
			url: 'https://about.gitlab.com/',
		},
		{
			icon: <ExcelSvg />,
			title: 'Excel',
			description: `The grand father of data analysis tools,`,
			url: 'https://www.microsoft.com/',
		},
		{
			icon: <PythonSvg />,
			title: 'Python',
			description: 'Fetching, formatting, scrapping,displaying datas and more',
			url: 'https://www.python.org',
		},
		{
			icon: <TailwindSvg />,
			title: 'Tailwind',
			description: 'The power of CSS easier and faster',
			url: 'https://tailwindcss.com',
		},
		{
			icon: <NextJsSvg />,
			title: 'NextJs',
			description: 'Sometimes a side projects pops from nowhere',
			url: 'https://nextjs.org/',
		},
		{
			icon: <FigmaSvg />,
			title: 'Figma',
			description: 'Trying to build something beautiful like this portfolio',
			figma: 'https://www.figma.com/',
		},
		{
			icon: <ReduxSvg />,
			title: 'Redux',
			description: 'Once uppon a time it was an amazing tool',
			url: 'https://redux.js.org',
		},
	];

	const andIcons = [
		{
			icon: <ExcelSvg />,
			title: 'Excel',
			description: `The grand father of data analysis tools,`,
			url: 'https://www.microsoft.com/',
		},
		{
			icon: <PythonSvg />,
			title: 'Python',
			description: 'Fetching, formatting, scrapping,displaying datas and more',
			url: 'https://www.python.org',
		},
		{
			icon: <TailwindSvg />,
			title: 'Tailwind',
			description: 'The power of CSS easier and faster',
			url: 'https://tailwindcss.com',
		},
	];
	// const someTimeIcons = [
	// 	{
	// 		icon: <NextJsSvg />,
	// 		title: 'NextJs',
	// 		description: 'Sometimes a side projects pops from nowhere',
	// 		url: 'https://nextjs.org/',
	// 	},
	// 	{
	// 		icon: <FigmaSvg />,
	// 		title: 'Figma',
	// 		description: 'Trying to build something beautiful like this portfolio',
	// 		figma: 'https://www.figma.com/',
	// 	},
	// 	{
	// 		icon: <ReduxSvg />,
	// 		title: 'Redux',
	// 		description: 'Once uppon a time it was an amazing tool',
	// 		url: 'https://redux.js.org',
	// 	},
	// ];
	const getDailyCards = cardDatas => {
		return cardDatas.map(ic => {
			return (
				<React.Fragment>
					{isMobile ? (
						<div
							className="max-w-[130px] h-[120px] relative border border-darkBlue dark:border-lightOrange   flex flex-row items-center"
							onClick={e => {
								setSelectedSkill({
									title: ic.title,
									url: ic.url,
									description: ic.description,
								});
								setOpenDrawer(!openDrawer);
							}}>
							{' '}
							<div className="w-[80px] h-[80px] mx-[24px] my-[20px]">
								{ic.icon}
							</div>
						</div>
					) : (
						<div
							className="group cursor-pointer  max-w-[140px] h-[140px] items-center relative border   border-lightOrange dark:border-lightOrange  flex flex-row fade-in-up "
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
		return imgList.map(imgComponent => (
			<div className=" relativeborder border-darkBlue dark:border-ligthBlue w-[300px] h-[150px]">
				<Image src={imgComponent} fill objectFit="contain" />
			</div>
		));
	};

	return (
		<React.Fragment>
			<div
				className={`grow container-sm ${
					isMobile ? 'h-[80%]' : 'h-[100%]'
				} flex flex-col justify-evenly  ${openDrawer ? 'opacity-50' : ''} `}>
				<div className="h-1/2 flex flex-col justify-evenly sm:justify-between mt-2 bg-transparent items-center overflow-hidden">
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
