import Head from 'next/head';

export default function Works() {
	return (
		<div className="container-sm  h-screen bg-darkBlue text-lightOrange stroke-lightOrange mt-2 mb-2">
			<div className="relative flex flex-row justify-evenly overflow-hidden mt-20 ml-5">
				<div className=" text-lightYellow w-1/5 h-96 text-center">
					<span>First</span>
					<div className="border border-red-500 h-[95%]">
						<div className="bg-white h-[15%]"> logo</div>
						<p className="h-auto"> description</p>
					</div>
				</div>
				<div className="  text-lightYellow w-1/5 m-16 h-96 text-center">
					<span>First</span>
					<div className="border border-red-500 h-[95%]">
						<div className="bg-white h-[15%]"> logo</div>
						<p className="h-auto"> description</p>
					</div>
				</div>
				<div className=" text-lightYellow w-1/5 h-96 text-center">
					<span>First</span>
					<div className="border border-red-500 h-[95%]">
						<div className="bg-white h-[15%]"> logo</div>
						<p className="h-auto"> description</p>
					</div>
				</div>
				<div className=" text-lightYellow w-1/5 m-16 h-96 text-center">
					<span>First</span>
					<div className="border border-red-500 h-[95%]">
						{' '}
						<div className="bg-white h-[15%]"> logo</div>
						<p className="h-auto"> description</p>
					</div>
				</div>
			</div>
		</div>
	);
}
