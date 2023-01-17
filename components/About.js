import Head from 'next/head';

export default function About({ isMobile }) {
	console.log('Is Mobile', isMobile);

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
		return aboutDatas.map(rm => {
			return (
				<li
					className="relative ml-[55px] after:top-[50%] after:h-[40px] after:w-0 after:mt-[-20px]  after:ml-[-42px] after:z-[5] after:content-[''] after:absolute 
				after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange after:pointer-events-none after:rotate-90">
					<div className="relative flex flex-col">
						<span className="text-[2xl] after:mt-[5px] after:block dark:after:bg-lightOrange after:w-[35px] after:h-[2px] after:content-['']">
							{rm.title}
						</span>
						<br />
						<span className="text-[14px] mt-[-15px]">{rm.description} </span>
					</div>
				</li>
			);
		});
	};
	const getDesktopRows = () => {
		return aboutDatas.map((r, idx) => {
			const isOdd = idx % 2;
			console.log(isOdd);
			return (
				<li
					className={`py-[1em] px-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible relative w-[500px] h-[160px] ${
						isOdd === 0
							? 'float-left text-right left-[55%]'
							: 'float-right right-[55%] '
					}`}>
					<div
						className={`relative  py-[6px] px-[10px] pl-[20px] rounded-[5px] font-medium text-left  h-[100%] ml-[10px]
														after:content-[''] after:absolute ${
															isOdd === 0
																? 'after:left-[-5%]'
																: 'after:left-[102%]'
														} after:top-[50%]  after:h-[40px] after:w-0 after:mt-[-20px] after:z-[5]
														after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange after:pointer-events-none after:rotate-90`}>
						<span className="text-2xl">{r.title}</span> <br />
						<span className="text-[14px]">{r.description} </span>
					</div>
				</li>
			);
		});
	};
	return (
		<div
			className="grow container-xl h-[100%] flex  flex-col flex-start border-0 border-t border-t-darkBlue dark:border-t-lightOrange overflow-y-hidden pt-[10px]"
			id="about">
			<span
				className={`relative h-[5%] text-${
					isMobile ? '2' : '3'
				}xl mt-[2px] ml-10`}>
				About me...
			</span>
			{isMobile ? (
				<ul className="relative h-[95%]  border-lightOrange w-[100%] py-2 px-2 list-none flex flex-col justify-between before:w-[5px]  before:h-[95%] before:absolute before:block before:ml-[-10px]  dark:before:bg-lightOrange before:content[''] before:z-[5] ">
					{getMobileRows()}
				</ul>
			) : (
				<ul className="relative w-[660px] my-0 mx-auto mt-[20px] list-none before:absolute before:left-[50%] before:top-0 before:block before:w-[6px] before:h-[100%] before:ml-[-3px]  dark:before:bg-lightOrange before:content[' '] before:z-[5] ">
					{getDesktopRows()}
				</ul>
			)}
		</div>
	);
}
