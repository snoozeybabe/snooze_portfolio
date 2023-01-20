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
		<div className="relative h-[100%] grow container-sm flex items-center flex-col-reverse md:flex-row">
			<div
				className="relative w-1/2 flex justify-center items-center"
				id="description_profil">
				<p className="h-2/3 md:h-2/3 w-[80%] mt-0  font-style-normal font-sans text-3xl lg:text-7xl tracking-wider  md:ml-[12px] font-bold  ">
					Hi there,
					<br /> I’m{' '}
					<span className="textStrokeTransparentLight dark:textStrokeTransparentDark">
						Drir Arezki
					</span>
					.
					<br /> 32 yo, <br />
					Bordeaux
					<br />
					France 🇫🇷
				</p>
			</div>
			<div
				className="relative sm:w-2/4  sm:h-2/4 md:w-1/2 m-auto flex items-center justify-center min-w-[250px] min-h-[250px] "
				id="img_profil">
				<div className="absolute md:top-[-10px] md:left-[80px] md:w-[420px] md:h-[420px] min-w-[250px] min-h-[250px] sm:mt-[-30px]  z-[1000]">
					<Image
						src={profilImg}
						alt="Picture of the author"
						className="min-w-[200px]"
					/>
				</div>
				<div className=" border dark:border-lightYellow md:w-[420px] md:h-[420px] h-[100%] w-[100%] md:top-[-5px] md:left-[70px] sm:mt-[40px] sm:ml-[40px]"></div>
			</div>
		</div>
	);
}
