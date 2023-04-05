import React from 'react';

function TwitterSvg({ fillColor, widthProps = '40', heightProps = '32' }) {
	return (
		<React.Fragment>
			<svg
				width={widthProps}
				height={heightProps}
				viewBox="0 0 77 71"
				fill={fillColor}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M69.0485 18.2038C69.0993 18.9694 69.0993 19.7307 69.0993 20.4919C69.0993 43.7888 53.2541 70.6338 24.2965 70.6338C15.375 70.6338 7.08685 67.7419 0.112305 62.7194C1.37898 62.8813 2.59874 62.9382 3.91625 62.9382C11.0041 62.9573 17.8913 60.305 23.4676 55.4088C20.1814 55.3422 16.9958 54.1289 14.3555 51.9383C11.7153 49.7476 9.75228 46.689 8.74056 43.1894C9.71403 43.3513 10.6914 43.4607 11.7157 43.4607C13.127 43.4607 14.5462 43.2419 15.8637 42.8613C12.2973 42.0555 9.09036 39.8922 6.78824 36.7393C4.48611 33.5864 3.23088 29.6385 3.23599 25.5669V25.3482C5.33539 26.6563 7.77101 27.4744 10.3513 27.5838C8.18967 25.9764 6.41723 23.7952 5.19207 21.2348C3.96691 18.6744 3.32714 15.8144 3.32982 12.9101C3.32982 9.63755 4.10781 6.6363 5.47223 4.02005C9.42918 9.46701 14.3644 13.9231 19.9582 17.0998C25.5521 20.2765 31.6798 22.1029 37.9445 22.4607C37.7021 21.1482 37.5536 19.7876 37.5536 18.4226C37.5525 16.108 37.9591 13.8159 38.7502 11.6774C39.5412 9.53877 40.7011 7.59563 42.1636 5.959C43.6261 4.32237 45.3625 3.02435 47.2735 2.13914C49.1845 1.25394 51.2327 0.798901 53.301 0.800051C57.836 0.800051 61.9293 2.9263 64.8067 6.36505C68.3321 5.60213 71.713 4.1619 74.7993 2.10818C73.6242 6.1805 71.1626 9.63363 67.8756 11.8207C71.0024 11.4216 74.0582 10.5014 76.9417 9.09068C74.7881 12.6042 72.1195 15.6853 69.0485 18.2038Z"
					fill={fillColor}
				/>
			</svg>
		</React.Fragment>
	);
}

export default TwitterSvg;
