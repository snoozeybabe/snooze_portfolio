import styles from '../styles/Home.module.css';
import Homepage from '../components/Home';
import profilImg from '../assets/img/IMAGE_ME.png';
import Image from 'next/image';

/* Hi there, I’m Drir Arezki. 32 yo Bordeaux France 🇫🇷. */

// position: absolute;
// width: 229px;
// height: 193px;
// left: 21px;
// top: 291px;

// font-family: 'Kanit';
// font-style: normal;
// font-weight: 300;
// font-size: 34px;
// line-height: 10px;
// /* or 29% */
// letter-spacing: 0.03em;

// color: #FEB139;

// mix-blend-mode: color-dodge;
// border: 2px solid #FEB139;

export default function Home() {
	return (
		<div className="max-w-screen-xl h-[100%] grow container-sm flex items-center">
			<p className=" h-2/3 w-1/2  font-style-normal font-sans lg:text-7xl tracking-wider ml-10 font-bold ">
				Hi there,
				<br /> I’m{' '}
				<span className="textStrokeTransparentLight dark:textStrokeTransparentDark">
					Drir Arezki
				</span>
				.
				<br /> 32 yo <br />
				Bordeaux France 🇫🇷
			</p>
			<div className="h-2/3 w-1/2 m-auto flex items-center justify-center">
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
