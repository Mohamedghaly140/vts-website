import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import './BackgroundSlider.css';

const BackgroundSlider = () => {
	return (
		<div className='vh-100 vw-100 overflow-hidden BackgroundSlider'>
			<OwlCarousel
				className='owl-theme'
				items={1}
				margin={0}
				center={true}
				nav={false}
				dots={false}
				loop={true}
				autoplay={true}
				autoplayHoverPause={false}
				autoplayTimeout={5000}
			>
				<div className='item vh-100 vw-100'>
					<div className='technology h-100 w-100'></div>
				</div>
				<div className='item vh-100 vw-100 digital'>
					<div className='digital h-100 w-100'></div>
				</div>
				<div className='item vh-100 vw-100 statics'>
					<div className='statics h-100 w-100'></div>
				</div>
			</OwlCarousel>
		</div>
	);
};

export default BackgroundSlider;
