import Head from 'next/head';
import React from 'react';

export default function Works({ isMobile }) {
	return (
		<div className="grow container-sm h-[100%] flex flex-col  border-0 border-t border-t-darkBlue dark:border-t-lightOrange">
			{isMobile ? (
				<div className="relative">
					<span>Mobile works </span>
				</div>
			) : (
				<React.Fragment>
					<div className="relative border border-red-800 h-[25%] flex align-center justify-center items-center">
						<div className=" lg:w-8/12 bg-gray-800 shadow-2xl rounded-lg h-[50%] overflow-hidden border border-gray-70">
							<div className="py-3 px-4 flex ">
								<div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
								<div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
								<div className="rounded-full w-3 h-3 bg-green-500"></div>
							</div>
							<div className="py-1 px-1  ml-3 text-white text-l flex align-center items-center">
								<div className="mb-2">
									<span>
										{' '}
										<span className="text-blue-600">mysql > </span>{' '}
										<span className="text-sky-400">SELECT</span> *{' '}
										<span className="text-sky-400">from</span> works
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="relative border border-red-800 h-[85%]"></div>
				</React.Fragment>
			)}
		</div>
	);
}
