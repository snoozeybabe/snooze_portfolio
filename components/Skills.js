import Head from 'next/head';
import {
	MySqlSvg,
	DataGripSvg,
	TailwindSvg,
	CubeJsSvg,
} from '../assets/svg/SkillsSvg';
export default function Skills() {
	return (
		<div className="grow container-sm h-[100%] flex flex-col justify-evenly border border-0 border-t border-t-darkBlue dark:border-t-lightOrange ">
			<div className="h-1/3 flex flex-col justify-evenly ">
				<span className="text-3xl mt-[2px] ml-[12px]">I'm daily using</span>
				<div className="scollableList w-[95%]  flex flex-nowrap gap-6 overflow-scroll scrollbar-hide ml-[12px] ">
					<div className="group w-[120px]  h-[120px] relative border border-lightOrange flex justify-center  items-center hover:bg-lightOrange hover:bg-opacity-30  hover:w-[500px] hover:items-left transition-all duration-250 delay-0 ease-in-out">
						{' '}
						<div className="group-hover:translate-x-1">
							<MySqlSvg />
						</div>
						{/*<p className="group-hover:text-red-500">Test</p>*/}
					</div>
					<div className="w-[120px]  h-[120px] relative border border-lightOrange flex justify-center items-center hover:bg-lightOrange hover:bg-opacity-30 hover:w-[500px] hover:items-left hover:justify-start transition-all duration-250 delay-0 ease-in-out ">
						{' '}
						<CubeJsSvg />
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						Arcplan
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						CubeJs
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						React
					</div>
					<div className="w-[120px]  h-[120px]     border border-lightOrange">
						Docker
					</div>
					<div className="w-[120px]  h-[120px]     border border-lightOrange">
						Gitlab
					</div>
				</div>
			</div>
			<div className="h-1/3 flex flex-col justify-evenly ">
				<span className="text-3xl mt-[2px] ml-[12px]">...and this</span>
				<div className="scollableList w-[95%] flex flex-nowrap gap-6  overflow-scroll scrollbar-hide ml-[12px]">
					<div className="w-[120px]  h-[120px]  border border-lightOrange">
						Redux
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						Excel
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						Python
					</div>
				</div>
			</div>
			<div className="h-1/3 flex flex-col justify-evenly ">
				<span className="text-3xl mt-[2px] ml-[12px]">...and sometimes</span>
				<div className="scollableList w-[95%]  flex flex-nowrap gap-6 overflow-scroll scrollbar-hide ml-[12px]">
					<div className="w-[120px]  h-[120px]  border border-lightOrange">
						Tailwind
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						Figma
					</div>
					<div className="w-[120px]  h-[120px]    border border-lightOrange">
						NextJs
					</div>
				</div>
			</div>
		</div>
	);
}
