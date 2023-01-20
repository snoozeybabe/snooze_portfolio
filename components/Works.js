import Head from 'next/head';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
export default function Works({ isMobile }) {
	const [runQuery, setRunQuery] = useState(false);

	const variantsBis = {
		initial: { y: 10, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -10, opacity: 0 },
		transition: { delay: 1, duration: 0.2, type: 'tween' },
	};

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
				isData: '0',
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
				isData: '0',
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
				isData: '0',
			},
			{
				id: 'BDX4',
				year: '2017',
				company: 'L’Addition',
				id_parent: 'NULL',
				main_stack: 'arcplan',
				project: 'Reporting',
				description:
					"creating BI dashboard and reports for l'Addition customers",
				isData: '1',
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
				isData: '1',
			},
			{
				id: 'BDX6',
				year: '2018',
				company: 'L’Addition',
				id_parent: 'BDX4',
				main_stack: 'arcplan',
				project: 'Reporting - TMA',
				description: "maintinig and fixing L'Addition reporting",
				isData: '1',
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
				isData: '1',
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
				isData: '1',
			},
			{
				id: 'BDX9',
				year: '2021',
				company: 'L’Addition',
				id_parent: 'BDX8',
				main_stack: 'javascript',
				project: 'Reporting (new) - CubeJS',
				description: 'handling reportings datas with CubeJs',
				isData: '1',
			},
			{
				id: 'BDX10',
				year: '2021',
				company: 'L’Addition',
				id_parent: 'BDX8',
				main_stack: 'javascript',
				project: 'Reporting (new) - CubeJS ',
				description: 'creating pre-aggregated reporting datas',
				isData: '1',
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
				isData: '0',
			},
			{
				id: 'BDX12',
				year: '2021',
				company: 'Side Project',
				id_parent: 'NULL',
				main_stack: 'wordpress',
				project: 'Tizi-Electronic',
				description: 'creating and developing a wordpress basic site',
				isData: '0',
			},
			{
				id: 'BDX13',
				year: '2022',
				company: 'Side project',
				id_parent: 'NULL',
				main_stack: 'nextjs_tailwind',
				project: 'My Portfolio',
				description:
					'creating and developing the website that you are actually using.',
				isData: '0',
			},
			{
				id: 'BDX14',
				year: '2022',
				company: 'Certification',
				id_parent: 'NULL',
				main_stack: 'NULL',
				project: 'AgilePM Certifcation',
				description: 'learning and seek the AgilePM certification',
				isData: '0',
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
				isData: '1',
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
				isData: '1',
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
				isData: '1',
			},
		],
	};

	const getWorksDatas = d => {
		return (
			<table className="table-auto min-w-full text-left">
				<thead className="dark:bg-lightOrange dark:text-darkBlue">
					<tr className="border">
						{d.headers.map(h => (
							<th className="border text-center">{h}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{d.datas.map(row => {
						// 'id',
						// 'year',
						// 'company',
						// 'id_parent',
						// 'main_stack',
						// 'project',
						// 'description',
						// 'is_data',
						return (
							<tr className="border text-center">
								<td className="border  ">{row.id}</td>
								<td className="border ">{row.year}</td>
								<td className="border ">{row.company}</td>
								<td
									className={`border ${
										row.id_parent === 'NULL' ? 'opacity-30' : ''
									}`}>
									{row.id_parent}
								</td>
								<td className="border ">{row.main_stack}</td>
								<td className="border ">{row.project}</td>
								<td className="border ">{row.description}</td>
								<td className="border ">{row.isData}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	};
	// const variants = {
	// 	stop: { y: [0, -20, 0], transition: { repeat: Infinity, repeatDelay: 5 } },
	// };
	return (
		<div className="grow container-sm h-[100%] flex flex-col  border-0 border-t border-t-darkBlue dark:border-t-lightOrange">
			{isMobile ? (
				<div className="relative">
					<span>Mobile works </span>
				</div>
			) : (
				<React.Fragment>
					<div className="relative  h-[25%] flex align-center justify-around gap-10 items-center">
						<div className=" lg:w-8/12 bg-gray-800 shadow-2xl rounded-lg h-[70%] overflow-hidden border border-slate-600">
							<div className="py-3 px-4 flex ">
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
							className=" w-[70px] h-[40px] dark:bg-lightOrange dark:text-darkBlue"
							onClick={e => {
								setRunQuery(!runQuery);
							}}>
							RUN
						</button>
					</div>
					<div className="relative h-[85%] flex align-center items-center justify-center">
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
