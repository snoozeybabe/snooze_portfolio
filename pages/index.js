import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Homepage from '../components/Home';
import profilImg from '../assets/img/IMAGE_ME.png';

/* Hi there, I’m Drir Arezki. 32 yo Bordeaux France 🇫🇷. */

// mix-blend-mode: color-dodge;
// border: 2px solid #FEB139;
// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

export default function Home() {
	return (
		<div className=" grow container-sm flex">
			<p className=" h-2/3 w-1/2  font-style-normal font-sans text-7xl  tracking-wider ml-10 font-bold mt-[11%]">
				Hi there,
				<br /> I’m{' '}
				<span className="textStrokeTransparentLight dark:textStrokeTransparentDark">
					Drir Arezki
				</span>
				.
				<br /> 32 yo <br />
				Bordeaux France 🇫🇷
			</p>
			<div className="h-2/3 w-1/2 m-auto flex items-center justify-center ">
				<Image
					src={profilImg}
					alt="Picture of the author"
					width="421px"
					height="421px"
				/>
			</div>
		</div>
	);
}

/* Moi 1 */

// position: absolute;
// width: 421px;
// height: 426px;
// left: 817px;
// top: 259px;

// background: url(Moi.jpg);
// border-radius: 5px;

// position: absolute;
// width: 553px;
// height: 358px;
// left: 87px;
// top: 306px;

// font-family: 'Kanit';

// line-height: 45px;
// /* or 62% */
// letter-spacing: 0.03em;
// mix-blend-mode: color-dodge;
// border: 2px solid #FEB139;
// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
