import Head from 'next/head';
import React from 'react';
import { aboutDatas } from '../utils/constant';

export default function About({ isMobile, position }) {
	const getMobileRows = () => {
		return aboutDatas.map((rm, idx) => {
			return (
				<li
					key={idx}
					id="img_profil"
					className="relative ml-[55px] after:top-[50%] after:h-[40px] after:w-0 after:mt-[-20px]  after:ml-[-42px] after:z-[5] after:content-[''] after:absolute 
					after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-ligthBlue  after:pointer-events-none after:rotate-90">
					<div className="relative flex flex-col md:gap-1">
						<span className="text-[2xl] after:mt-[5px] md:text-3xl  after:block dark:after:bg-ligthBlue after:w-[35px] after:h-[2px] after:content-['']">
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
						id="li_about"
						className={`relative  py-[6px] px-[10px] pl-[20px] rounded-[5px] font-medium text-left w-[auto] h-[100%] ml-[10px]
														flex flex-col justify-evenly 
														xl:w-auto
														after:content-[''] after:absolute after:left-[-1%] after:top-[50%] after:h-[40px] after:w-0 after:mt-[-20px] after:z-[5] after:border-[1px] after:border-solid after:border-darkBlue 
														before:content[''] before:absolute before:w-[0] before:left-[12px] before:h-[80%] before:z-[5] before:border before:border-solid  before:border-darkBlue dark:before:border-ligthBlue 
														dark:after:border-ligthBlue after:pointer-events-none after:rotate-90`}>
						<span className="text-3xl pl-1 font-bold">{r.title}</span>
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
				}xl mt-[2px] ml-[12px] text-center font-bold`}>
				About Me
			</span>
			{position > 0.2 ? (
				<React.Fragment>
					{isMobile ? (
						<ul
							className="relative h-[95%] mt-0 border-lightOrange w-[100%] py-2 px-2 list-none flex flex-col justify-between 
														before:w-[5px]  before:h-[98%] before:absolute before:block before:ml-[-10px] before:content[''] before:z-[5] before:bg-darkBlue
													  dark:before:bg-ligthBlue  top-4 ">
							{getMobileRows()}
						</ul>
					) : (
						<ul
							id={isMobile ? 'animate_from_top' : 'li_about'}
							className="relative h-[95%] mt-0 border-lightOrange w-[100%] py-2 px-2 list-none flex flex-col justify-between 
							before:w-[5px]  before:h-[98%] before:absolute before:block before:ml-[-10px] before:content[''] before:z-[5] before:bg-darkBlue
							dark:before:bg-ligthBlue top-4  ">
							{getDesktopRows()}
						</ul>
					)}
				</React.Fragment>
			) : null}
		</div>
	);
}
