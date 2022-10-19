import Head from 'next/head';

export default function Skills() {
	return (
		<div className="grow container-sm flex flex-col justify-evenly ">
			<div className="h-1/3">
				<span>I'm daily using</span>
				<div className="grid grid-cols-5 gap-1">
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
					<div className="w-[90px]  h-[90px]  border border-red-800">1</div>
				</div>
			</div>
			<div className="border border-red-800 h-1/3">and this</div>
			<div className="border border-red-800 h-1/3"> and sometimes</div>
		</div>
	);
}
