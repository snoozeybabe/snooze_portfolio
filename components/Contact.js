import Head from 'next/head';
import TwitterSvg from '../assets/svg/TwitterSvg';
import LinkedinSvg from '../assets/svg/LinkedinSvg';
import { useTheme } from 'next-themes';

export default function Contact() {
	const { theme, setTheme } = useTheme();
	const fillColor = '#FF8C29';
	return (
		<div className="grow container-sm h-[100%] flex ">
			{' '}
			<div className="m-auto h-2/3 w-3/4 flex flex-col justify-evenly items-center">
				<span className="font-style-normal tracking-wider font-bold font-sans text-[3em] leading-none text-center">
					Let's get in touch
				</span>

				<a
					className="cursor-pointer  bg-lightOrange  dark:border-lightOrange w-[70%] h-[20%] text-center dark:text-darkBlue  sm:text-[2em] flex justify-center items-center"
					href="mailto:contact@arezkidrir.fr">
					<span>contact@arezkidrir.fr</span>
				</a>

				<div className="h-[15%] w-[40%] flex justify-center items-center">
					<a
						href="https://www.linkedin.com/in/arezkidrir/"
						target="_blank"
						rel="noopener noreferrer">
						<LinkedinSvg
							fillColor={fillColor}
							widthProps="80"
							heightProps="77"
						/>
					</a>
					<a
						href="https://twitter.com/DrirArezki"
						target="_blank"
						rel="noopener noreferrer">
						<TwitterSvg
							fillColor={fillColor}
							widthProps="70"
							heightProps="77"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
