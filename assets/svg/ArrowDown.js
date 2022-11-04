import React from 'react';

function ArrowDown({ fillColor }) {
	return (
		<React.Fragment>
			<svg
				width="30"
				height="28"
				viewBox="0 0 30 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_b_325_19)">
					<path
						d="M13.5858 27.4142C14.3668 28.1953 15.6332 28.1953 16.4142 27.4142L29.1421 14.6863C29.9232 13.9052 29.9232 12.6389 29.1421 11.8579C28.3611 11.0768 27.0948 11.0768 26.3137 11.8579L15 23.1716L3.68629 11.8579C2.90524 11.0768 1.63891 11.0768 0.857864 11.8579C0.0768156 12.6389 0.0768156 13.9052 0.857864 14.6863L13.5858 27.4142ZM13 4.37978e-09L13 26L17 26L17 -4.37978e-09L13 4.37978e-09Z"
						fill={fillColor}
					/>
				</g>
				<defs>
					<filter
						id="filter0_b_325_19"
						x="-3.72803"
						y="-4"
						width="37.4561"
						height="36"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
						<feComposite
							in2="SourceAlpha"
							operator="in"
							result="effect1_backgroundBlur_325_19"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_backgroundBlur_325_19"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</React.Fragment>
	);
}

export default ArrowDown;
