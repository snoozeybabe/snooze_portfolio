import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const tableData = {
	headers: [
		'id',
		'year',
		'company',
		'id_parent',
		'main_stack',
		'project',
		'description',
		'is_data',
	],
	datas: [
		{
			id: 'BDX1',
			year: '2013',
			company: 'Sport Trader',
			id_parent: 'NULL',
			main_stack: 'excel_vba',
			project: 'Sport Trader',
			description:
				'creating and handling excel application to manage football bets',
			is_data: '0',
		},
		{
			id: 'BDX2',
			year: '2014',
			company: 'IBS Online',
			id_parent: 'NULL',
			main_stack: 'prestashop',
			project: 'Ibs Online',
			description:
				'developping prestashop e-commerce website for selling  baby stuffs ',
			is_data: '0',
		},
		{
			id: 'BDX3',
			year: '2015',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'titanium',
			project: 'Caisse',
			description:
				'developping cash register application for restaurant and hotels',
			is_data: '0',
		},
		{
			id: 'BDX4',
			year: '2017',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'arcplan',
			project: 'Reporting',
			description: "creating BI dashboard and reports for l'Addition customers",
			is_data: '1',
		},
		{
			id: 'BDX5',
			year: '2017',
			company: 'L’Addition',
			id_parent: 'BDX4',
			main_stack: 'arplan',
			project: 'Reporting - Specific report',
			description:
				'creating specifis report for restaurant manager,financial directors and more',
			is_data: '1',
		},
		{
			id: 'BDX6',
			year: '2018',
			company: 'L’Addition',
			id_parent: 'BDX4',
			main_stack: 'arcplan',
			project: 'Reporting - TMA',
			description: "maintinig and fixing L'Addition reporting",
			is_data: '1',
		},
		{
			id: 'BDX7',
			year: '2018',
			company: 'L’Addition',
			id_parent: 'BDX4',
			main_stack: 'arcplan',
			project: 'Reporting- Training',
			description:
				"training customers and sales agent to use l'Addition reporting",
			is_data: '1',
		},
		{
			id: 'BDX8',
			year: '2021',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'react_js',
			project: 'Reporting (new)',
			description:
				"moving l'Addition reporting from Arcplan software to a full js stack",
			is_data: '1',
		},
		{
			id: 'BDX9',
			year: '2021',
			company: 'L’Addition',
			id_parent: 'BDX8',
			main_stack: 'javascript',
			project: 'Reporting (new) - CubeJS',
			description: 'handling reportings datas with CubeJs',
			is_data: '1',
		},
		{
			id: 'BDX10',
			year: '2021',
			company: 'L’Addition',
			id_parent: 'BDX8',
			main_stack: 'javascript',
			project: 'Reporting (new) - CubeJS ',
			description: 'creating pre-aggregated reporting datas',
			is_data: '1',
		},
		{
			id: 'BDX11',
			year: '2021',
			company: 'Side Project',
			id_parent: 'NULL',
			main_stack: 'nextjs',
			project: 'Sorami Thaï',
			description:
				'creating and developing a website for my best friend restaurant ',
			is_data: '0',
		},
		{
			id: 'BDX12',
			year: '2021',
			company: 'Side Project',
			id_parent: 'NULL',
			main_stack: 'wordpress',
			project: 'Tizi-Electronic',
			description: 'creating and developing a wordpress basic site',
			is_data: '0',
		},
		{
			id: 'BDX13',
			year: '2022',
			company: 'Side project',
			id_parent: 'NULL',
			main_stack: 'nextjs_tailwind',
			project: 'This Portfolio',
			description:
				'creating and developing the website that you are actually using.',
			is_data: '0',
		},
		{
			id: 'BDX14',
			year: '2022',
			company: 'Certification',
			id_parent: 'NULL',
			main_stack: 'NULL',
			project: 'AgilePM Certifcation',
			description: 'learning and seek the AgilePM certification',
			is_data: '0',
		},
		{
			id: 'BDX15',
			year: '2022',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'node_js',
			project: 'Customer Area - KPI',
			description:
				"modelling, creating and handling L'Addition customers area KPI",
			is_data: '1',
		},
		{
			id: 'BDX16',
			year: '2022',
			company: 'Side project',
			id_parent: 'NULL',
			main_stack: 'python',
			project: 'Python',
			description:
				'learning the datas part of python and playing with some scripts',
			is_data: '1',
		},
		{
			id: 'BDX17',
			year: '2023',
			company: "L'Adddition",
			id_parent: 'BDX12',
			main_stack: 'node_js',
			project: 'Customer Area - KPI',
			description:
				'creating the strategy and scripts to refresh and format KPI datas',
			is_data: '1',
		},
	],
};

export default function Works({ isMobile }) {
	const [runQuery, setRunQuery] = useState(true);
	const [nextDisplay, setNextDisplay] = useState(1);
	const [previousDisplay, setPreviousDisplay] = useState(0);
	const [scrollTablePos, setScrollTablePos] = useState(0);
	const [actualPosition, setActualPosition] = useState(0);
	const router = useRouter();

	const variantsBis = {
		initial: { y: 10, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -10, opacity: 0 },
		transition: { delay: 1, duration: 0.2, type: 'tween' },
	};

	useEffect(() => {
		const scrollableMain = document.getElementById('mobileContainer');
		if (scrollableMain) {
			scrollableMain.addEventListener('scroll', handleTableScroll, {
				passive: true,
			});
		}
		return () => {
			const scrollableMain = document.getElementById('mobileContainer');
			if (scrollableMain) {
				scrollableMain.removeEventListener('scroll', handleTableScroll);
			}
		};
	}, [actualPosition]);

	useEffect(() => {
		setNextDisplay(
			actualPosition >= tableData.datas.length
				? actualPosition
				: actualPosition + 1
		);
		setPreviousDisplay(actualPosition === 0 ? 0 : actualPosition - 1);
	}, []);
	const handleTableScroll = e => {
		setTimeout(() => {
			const actualPosition = parseInt((e.target.scrollLeft / 280).toFixed());

			const scrollDirection =
				scrollTablePos <= e.target.scrollLeft ? 'next' : 'prev';

			// if (scrollDirection === 'next') {
			// 	setNextDisplay(
			// 		nextDisplay >= tableData.datas.length ? nextDisplay : nextDisplay + 1
			// 	);
			// 	setPreviousDisplay(nextDisplay - 1);
			// } else {
			// 	setNextDisplay(nextDisplay === 1 ? 1 : nextDisplay - 1);
			// 	setPreviousDisplay(previousDisplay <= 1 ? 0 : previousDisplay - 1);
			// }
			setActualPosition(actualPosition);
			setScrollTablePos(e.target.scrollLeft);
		}, 1500);
	};
	const linkClick = (e, dir) => {
		e.preventDefault();
		//handle manual scroll and set index with position
		if (dir === 'next') {
			ref.current?.scrollIntoView({ behavior: 'smooth' });
			setNextDisplay(
				nextDisplay >= tableData.datas.length ? nextDisplay : nextDisplay + 1
			);
			setPreviousDisplay(nextDisplay - 1);
		} else {
			refPrev.current?.scrollIntoView({ behavior: 'smooth' });
			setNextDisplay(nextDisplay === 1 ? 1 : nextDisplay - 1);
			setPreviousDisplay(previousDisplay <= 1 ? 0 : previousDisplay - 1);
		}
	};
	const ref = useRef(null);
	const refPrev = useRef(null);
	const getMobileTables = (tData, tHeaders) => {
		return tData.map((t, idx) => {
			const tProps =
				idx === nextDisplay
					? { ref: ref }
					: idx === previousDisplay
					? { ref: refPrev }
					: {};
			return (
				<React.Fragment>
					<table
						key={idx}
						className="min-h-full min-w-[80%] border border-darkBlue dark:border-ligthBlue text-center snap-center"
						id={idx}
						{...tProps}>
						<thead className="">
							<tr>
								<th className="border  bg-darkYellow text-ligthBlue border-darkBlue dark:bg-ligthBlue dark:text-darkBlue">
									field
								</th>
								<th className="border  bg-darkYellow text-ligthBlue border-darkBlue dark:bg-ligthBlue dark:text-darkBlue">
									value
								</th>
							</tr>
						</thead>
						<tbody>
							{tHeaders.map(h => {
								return (
									<tr className="borderborder-darkBlue dark:border-ligthBlue ">
										<td className="border border-darkBlue dark:border-ligthBlue ">
											{h}
										</td>
										<td
											className={`border border-darkBlue dark:border-ligthBlue  ${
												t[h] === 'NULL' ? 'opacity-30' : ''
											} `}>
											{t[h]}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</React.Fragment>
			);
		});
	};
	const getWorksDatas = d => {
		return (
			<table className="table-auto min-w-full text-left">
				<thead className="dark:bg-lightOrange dark:text-darkBlue">
					<tr className="border border-darkBlue  dark:border-lightOrange ">
						{d.headers.map(h => (
							<th className="border border-ligthBlue bg-darkBlue text-ligthBlue  dark:border-darkBlue dark:bg-ligthBlue dark:text-darkBlue  text-center">
								{h}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{d.datas.map(row => {
						return (
							<tr className="border text-center">
								<td className="border border-darkBlue dark:border-ligthBlue  ">
									{row.id}
								</td>
								<td className="border border-darkBlue dark:border-ligthBlue ">
									{row.year}
								</td>
								<td className="border border-darkBlue dark:border-ligthBlue">
									{row.company}
								</td>
								<td
									className={`border border-darkBlue dark:border-ligthBlue ${
										row.id_parent === 'NULL' ? 'opacity-30' : ''
									}`}>
									{row.id_parent}
								</td>
								<td className="border border-darkBlue dark:border-ligthBlue">
									{row.main_stack}
								</td>
								<td className="border border-darkBlue dark:border-ligthBlue ">
									{row.project}
								</td>
								<td className="border border-darkBlue dark:border-ligthBlue">
									{row.description}
								</td>
								<td className="border border-darkBlue dark:border-ligthBlue">
									{row.is_data}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	};

	return (
		<div className="grow container-sm h-[100%] flex flex-col sm:pt-4 ">
			{isMobile ? (
				<React.Fragment>
					<div className="relative min-w-full h-[5%] pt-[10px]">
						<span className={`relative  text-3xl mt-[12px] ml-5`}>Works</span>
					</div>
					<div className="relative flex flex-col justify-center overflow-hidden bg-none py-12">
						<div
							className=" relative  h-[50vh]  ml-4 flex overflow-scroll gap-3 scroll-smooth snap-mandatory snap-y"
							id="mobileContainer">
							{getMobileTables(tableData.datas, tableData.headers)}
						</div>

						<div className=" h-20 mt-10px flex items-center justify-evenly">
							<a
								disabled={nextDisplay === 1}
								className={`border flex border-darkYellow justify-center items-center dark:border-ligthBlue w-[100px] h-[35px] text-center ${
									nextDisplay === 1 ? 'opacity-40' : ''
								}`}
								onClick={e => {
									linkClick(e, 'prev');
								}}>
								Prev.
							</a>
							<a
								className={`border border-darkBlue  flex justify-center items-center dark:border-ligthBlue  w-[100px]  h-[35px] text-center ${
									nextDisplay === tableData.datas.length ? 'opacity-40' : ''
								}`}
								onClick={e => {
									linkClick(e, 'next');
								}}>
								Next
							</a>
						</div>
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<span className={`relative text-3xl mt-[12px] ml-5 text-center`}>
						Projects I Worked On
					</span>
					<div className="relative  h-[20%] flex align-center justify-center gap-3 items-center">
						<div className=" lg:w-[80%] bg-gray-800 shadow-2xl rounded-lg h-[70%] overflow-hidden border border-slate-600">
							<div className="pb-3 pt-2 px-4 flex ">
								<div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
								<div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
								<div className="rounded-full w-3 h-3 bg-green-500"></div>
							</div>
							<div className="py-4 px-1  ml-3 text-white text-l flex align-center items-center">
								<div className="mb-2">
									<span>
										{' '}
										<span className="text-blue-600">mysql</span>
										<span className="text-blue-600">{` >`}</span>{' '}
										<span className="text-sky-400">SELECT</span>{' '}
										{`${tableData.headers.join()}`}{' '}
										<span className="text-sky-400">from</span> works;
									</span>
								</div>
							</div>
						</div>
						<button
							className=" cursor-pointer w-[100px] h-[50px] text-lightBlue border border-lightOrange bg-lightOrange dark:text-darkBlue rounded"
							onClick={e => {
								setRunQuery(!runQuery);
							}}>
							{runQuery ? 'Clear' : 'Run'}
						</button>
					</div>
					<div className="relative h-[85%] flex align-center items-center justify-center ">
						<motion.div
							className="w-[90%] h-[80%] text-[13px]"
							variants={variantsBis}
							animate={runQuery ? 'animate' : 'initial'}>
							{getWorksDatas(tableData)}
						</motion.div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}
