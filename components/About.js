import Head from 'next/head';
import React from 'react';

export default function About({ isMobile, position }) {
	console.log('POSITION', position);
	const aboutDatas = [
		{
			title: '2015 - Hybrid mobile development',
			description:
				'My first work was as a junior mobile developer at L’Addtion in Bordeaux. Hybrid developement was an amazing discovery for me.One code for every device.',
		},
		{
			title: '2017 - Business intelligence',
			description:
				'But i always loved data, all the aspects of datas, that’s why i became the chief of reporting at L’Addition. That was my first BI experience.My job was to re-create a brand new reporting for our customers.',
		},
		{
			title: '2019 - Next level BI',
			description:
				'Started to move to another type of BI. I left the software to develop new dashboards and report with modern web technologies.',
		},
		{
			title: 'Now',
			description:
				'Still in love with datas i’m trying to level up my skills about data analysis and data science by learning new tools and languages like Python. On my free time i like testing and playing with new frameworks and tools.',
		},
	];

	const getMobileRows = () => {
		return aboutDatas.map((rm, idx) => {
			return (
				<li
					key={idx}
					id="img_profil"
					className="relative ml-[55px] after:top-[50%] after:h-[40px] after:w-0 after:mt-[-20px]  after:ml-[-42px] after:z-[5] after:content-[''] after:absolute 
					after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange after:pointer-events-none after:rotate-90">
					<div className="relative flex flex-col md:gap-1">
						<span className="text-[2xl] after:mt-[5px] md:text-3xl  after:block dark:after:bg-lightOrange after:w-[35px] after:h-[2px] after:content-['']">
							{rm.title}
						</span>
						<br />
						<span className="text-[14px] mt-[-15px] md:text-2xl ">
							{rm.description}{' '}
						</span>
					</div>
				</li>
			);
		});
	};
	const getDesktopRows = () => {
		return aboutDatas.map((r, idx) => {
			const isOdd = idx % 2;
			return (
				<li
					key={idx}
					className={`py-[1em] px-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible relative w-[80%] h-[160px]
					`}>
					<div
						id="img_profil"
						className={`relative  py-[6px] px-[10px] pl-[20px] rounded-[5px] font-medium text-left w-[auto] h-[100%] ml-[10px]
														flex flex-col justify-around 
														xl:w-auto
														after:content-[''] after:absolute after:left-[-1%] after:top-[50%] after:h-[40px] after:w-0 after:mt-[-20px] after:z-[5] after:border-[1px] after:border-solid after:border-darkBlue 
														before:content[''] before:absolute before:w-[0] before:left-[12px] before:h-[80%] before:z-[5] before:border before:border-solid  before:border-darkBlue dark:before:border-lightOrange
														dark:after:border-lightOrange after:pointer-events-none after:rotate-90`}>
						<span className="text-2xl pl-1">{r.title}</span>
						<span className="text-[16px] pl-1">{r.description} </span>
					</div>
				</li>
			);
		});
	};
	return (
		<div
			className="grow container-xl h-[100%] overflow-hidden flex  flex-col flex-start overflow-y-hidden pt-[10px]"
			id="about">
			<span
				className={`relative h-[5%] text-${
					isMobile ? '2' : '3'
				}xl mt-[2px] ml-[12px] text-center`}>
				About me...
			</span>
			{position > 0.2 ? (
				<React.Fragment>
					{isMobile ? (
						<ul
							className="relative h-[95%] mt-0 border-lightOrange w-[100%] py-2 px-2 list-none flex flex-col justify-between 
														before:w-[5px]  before:h-[98%] before:absolute before:block before:ml-[-10px] before:content[''] before:z-[5] before:bg-darkBlue
													  dark:before:bg-lightOrange  ">
							{getMobileRows()}
						</ul>
					) : (
						<ul
							id={isMobile ? 'animate_from_top' : 'list_about'}
							className="relative h-[95%] mt-0 border-lightOrange w-[100%] py-2 px-2 list-none flex flex-col justify-between 
							before:w-[5px]  before:h-[98%] before:absolute before:block before:ml-[-10px] before:content[''] before:z-[5] before:bg-darkBlue
							dark:before:bg-lightOrange ">
							{getDesktopRows()}
						</ul>
					)}
				</React.Fragment>
			) : null}
		</div>
	);
}
