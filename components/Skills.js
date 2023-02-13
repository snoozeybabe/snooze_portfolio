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
	const someTimeIcons = [
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
	const getDailyCards = cardDatas => {
		return cardDatas.map(ic => {
			return (
				<React.Fragment>
					{isMobile ? (
						<div
							className="max-w-[130px] h-[120px] relative border border-darkYellow  dark:border-lightOrange   flex flex-row items-center"
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
							className="group max-w-[130px] h-[120px] relative border  border-lightOrange  flex flex-row items-center  hover:min-w-[300px] transition-all duration-500 delay-0 ease-in-out hover:bg-lightYellow"
							onClick={e => {}}>
							{' '}
							<div className="w-[80px] h-[80px] mx-[24px] my-[20px]">
								{ic.icon}
							</div>
							<div className="top-[90%] transition-all duration-700 delay-1 ease-in-out opacity-0 duration-10 p-[20px] relative px-[9px] w-[300px] flex flex-col justify-center h-[100px] overflow-hidden group-hover:top-0 group-hover:opacity-100 group-hover:duration-1000 group-hover:text-darkBlue">
								<a href={ic.url} target="_blank">
									<span className="text-transparent group-hover:text-darkBlue text-[16px]">
										{' '}
										{`<${ic.title}/>`}
									</span>
								</a>
								<p className="text-transparent text-[12px] group-hover:text-darkBlue">
									{' '}
									{ic.description}
								</p>
							</div>
						</div>
					)}
				</React.Fragment>
			);
		});
	};

	return (
		<React.Fragment>
			<div
				className={`grow container-sm h-[100%] flex flex-col justify-evenly  border-t border-t-darkBlue dark:border-t-lightOrange ${
					openDrawer ? 'opacity-50' : ''
				} `}>
				<div className="h-1/3 flex flex-col justify-evenly bg-transparent ">
					<span className="text-3xl mt-[2px] ml-[12px]">I'm daily using</span>
					<div className="scollableListLight dark:scollableList w-[95%] flex flex-nowrap gap-4 overflow-scroll scrollbar-hide ml-[12px] bg-transparent overflow-y-hidden">
						{getDailyCards(dailyIcons)}
					</div>
				</div>
				<div className="h-1/3 flex flex-col justify-evenly bg-transparent ">
					<span className="text-3xl mt-[2px] ml-[12px]">...and this</span>
					<div className="scollableListLight dark:scollableList w-[95%] flex flex-nowrap gap-4  overflow-scroll scrollbar-hide ml-[12px] bg-transparent overflow-y-hidden">
						{getDailyCards(andIcons)}
					</div>
				</div>
				<div className="h-1/3 flex flex-col justify-evenly bg-transparent ">
					<span className="text-3xl mt-[2px] ml-[12px]">...and sometimes</span>
					<div className="scollableListLight dark:scollableList w-[95%] flex flex-nowrap gap-4 overflow-scroll scrollbar-hide ml-[12px] bg-transparent overflow-y-hidden">
						{getDailyCards(someTimeIcons)}
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
