import Head from 'next/head';

export default function About() {
	return (
		<div
			className="grow container-xl h-[100%] flex  border-0 border-t border-t-darkBlue dark:border-t-lightOrange"
			id="about">
			<ul className="relative w-[660px] my-0 mx-auto mt-[20px] list-none before:absolute before:left-[50%] before:top-0 before:block before:w-[6px] before:h-[100%] before:ml-[-3px] before:bg-gradient-to-t before:from-darkBlue before:via-darkBlue  dark:before:from-lightOrange dark:before:via-lightOrange before:content[' '] before:z-[5] ">
				<li className="py-[1em] px-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible relative w-[500px] h-[160px] float-left text-right left-[55%]">
					<div
						className="relative  py-[6px] px-[10px] pl-[20px] rounded-[5px] font-medium text-left  h-[100%] 
														after:content-[''] after:absolute after:left-[-2%] after:top-[50%]  after:h-[40px] after:w-0 after:mt-[-20px] after:z-[5]
														after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange after:pointer-events-none after:rotate-90">
						<span className="text-2xl">2015 - Hybrid mobile development</span>{' '}
						<br />
						<span className="text-[14px]">
							My first work was as a junior mobile developer at L’Addtion in
							Bordeaux.  Hybrid developement was an amzing discovery for me. One
							code for every device.{' '}
						</span>
					</div>
				</li>
				<li className="py-[1em]  px-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible relative w-[500px] h-[160px] float-right right-[55%] ">
					<div
						className="relative  py-[6px] px-[10px] rounded-[5px] font-medium text-left  h-[100%] 
													after:content-[''] after:absolute after:left-[101%] after:top-[50%]  after:h-[45px] after:w-0 after:mt-[-20px] after:z-[5]
													after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange  after:pointer-events-none after:rotate-90">
						<span className="text-2xl">2017 - Business intelligence</span>{' '}
						<br />
						<span className="text-[14px]">
							But i always loved data, all the aspects of datas, that’s why i
							became the chief of reporting at L’Addition. That was my first BI
							experience. My job was to re-create a brand new reporting for our
							customers.
						</span>
					</div>
				</li>
				<li className="py-[1em] px-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible relative w-[500px] h-[160px] float-left text-right left-[55%]">
					<div
						className="relative  py-[6px] px-[10px] pl-[20px] rounded-[5px] font-medium text-left h-[100%] 
											after:content-[''] after:absolute after:left-[-2%] after:top-[50%]  after:h-[40px] after:w-0 after:mt-[-20px] after:z-[5]
											after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange  after:pointer-events-none after:rotate-90
					">
						<span className="text-2xl">2019 - Next level BI</span> <br />
						<span className="text-[14px]">
							Started to move to another type of BI. I left the software to
							develop new dashboards and report with modern web technologies.
						</span>
					</div>
				</li>
				<li className="py-[1em] px-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible relative w-[500px] h-[160px] float-right right-[55%]  ">
					<div
						className="relative  py-[6px] px-[10px]  rounded-[5px] font-medium text-left h-[100%]  	
											after:content-[''] after:absolute after:left-[101%] after:top-[50%]  after:h-[45px] after:w-0 after:mt-[-20px] after:z-[5]
											after:border-[1px] after:border-solid after:border-darkBlue dark:after:border-lightOrange  after:pointer-events-none after:rotate-90">
						<span className="text-2xl text-right">Now </span> <br />
						<span className="text-[1px]">
							Still in love with datas i’m trying to level up my skills about
							data analysis and data science by learning new tools and languages
							like Python. On my free time i like testing and playing with new
							frameworks and tools.{' '}
						</span>
					</div>
				</li>
			</ul>
		</div>
	);
}
