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

export default function Home({ sHeight }) {
	return (
		<div className="relative h-[100%] pt-10 grow container-sm flex items-center flex-col-reverse md:flex-row">
			<p className="h-2/3  md:h-2/3 md:w-1/2  font-style-normal font-sans text-3xl lg:text-7xl tracking-wider m-auto md:ml-[12px] font-bold py-[8%] ">
				Hi there,
				<br /> I’m{' '}
				<span className="textStrokeTransparentLight dark:textStrokeTransparentDark">
					Drir Arezki
				</span>
				.
				<br /> 32 yo, <br />
				Bordeaux France 🇫🇷
			</p>
			<span>{sHeight}</span>
			<div className=" w-2/3 h-3/4 md:h-2/3 md:w-1/2 m-auto flex items-center justify-center">
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
