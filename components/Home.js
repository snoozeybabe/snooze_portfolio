import styles from '../styles/Home.module.css';
import Homepage from '../components/Home';
import profilImg from '../assets/img/IMAGE_ME.png';
import Image from 'next/image';
import MenuBurger from './MenuBurger';
import * as dayjs from 'dayjs';
export default function Home({ sHeight }) {
	return (
		<div
			className="relative h-[100%] grow flex justify-evenly items-center flex-col-reverse overflow-hidden 
										sm:flex-col-reverse 
										md:container-sm lg:flex-row">
			<div
				className="relative flex w-auto h-[50%] ml-[10%]
										md:w-[100%] md:h-[50%] 
										lg:ml-0  lg:h-[100%] lg:w-[55%]
										justify-center items-center"
				id="description_profil">
				<p
					className="w-[100%]  h-auto mt-0 font-style-normal tracking-wider font-bold font-sans text-[3em] leading-none
											sm:w-[100%] sm:top-3 md:text-[4em]
											lg:text-[4em] lg:ml-[5vw]
										  md:ml-[12px]">
					Hi there,
					<br /> I’m <span>Drir Arezki</span>
					.
					<br /> {Math.round(
						dayjs().diff('1990-03-28', 'year', true)
					)} y.o. <br />
					Bordeaux
					<br />
					France 🇫🇷
				</p>
			</div>
			<div
				className="relative h-auto w-auto m-0 flex items-center justify-center
									 sm:h-[50%] 
									 md:m-auto md:w-2/4  md:h-2/4 md:min-w-[250px]  
									 xl:min-h-[100%]"
				id="img_profil">
				<div
					className="absolute w-[30vh] h-[30vh] left-auto top-auto flex items-center justify-center
									   sm:w-[35vh] sm:h-[35vh]
										 lg:w-[40vh] lg:h-[40vh]">
					<Image
						src={profilImg}
						layout="fill"
						objectFit="contain"
						alt="Picture of the author"
					/>
				</div>
				<div
					className="border border-darkBlue dark:border-ligthBlue w-[30vh] h-[30vh] left-auto top-auto
												sm:w-[35vh] sm:h-[35vh]
												lg:w-[40vh] lg:h-[40vh] lg:mt-[40px] lg:ml-[40px]"></div>
			</div>
		</div>
	);
}
