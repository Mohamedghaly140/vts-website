import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import classes from './home.module.css';

import Navbar from '../../Navbar/Navbar';
import Wave from '../../UI/Wave/Wave';
import BarUp from '../../UI/BarUp/BarUp';
import SocialHome from '../../UI/Social/SocialHome';

// import bar from '../../../assets/down.gif';
import bar from '../../../assets/downgif.gif';

// Social Images
import facebookWhite from '../../../assets/Facebook1.png';
import twitterWhite from '../../../assets/Twitter1.png';
import whatsAppWhite from '../../../assets/WhatsApp1.png';
import instagramWhite from '../../../assets/Instagram1.png';

// Button icon
import iconBtn from '../../../assets/play.png';

import Video from '../../Video/Video';

const Home = props => {
	const [modalShow, setModalShow] = useState(false);

	return (
		<Fragment>
			<Navbar bgcolor='transparent' />
			<section className={classes.Home}>
				<div className={classes.Overlay}></div>
				<div className={classes.Caption}>
					<div className='d-flex justify-content-between align-items-center'>
						<div className={classes.BarDown} style={{ width: '14px' }}>
							<img className='img-fluid' src={bar} alt='bar' />
						</div>
						<div className='ml-4 w-100'>
							<h1>Your</h1>
							<h2 className='text-capitalize'>Vision Prevails</h2>
						</div>
					</div>
					<div className={classes.Best__offer}>
						<h2>Best Offer</h2>
						<p>
							Lorem, ipsum dolor sit amet <br /> consectetur
							adipisicing elit.
						</p>
						<Button
							variant='primary'
							onClick={() => setModalShow(true)}
						>
							<span
								className='d-inline-block mr-2'
								style={{ width: '21px' }}
							>
								<img
									className='img-fluid'
									src={iconBtn}
									alt='button icon plat'
								/>{' '}
							</span>
							View Video
						</Button>

						<Video
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
					</div>
				</div>
				<Wave />
				<BarUp />
				<SocialHome
					facebook={facebookWhite}
					twitter={twitterWhite}
					whatsApp={whatsAppWhite}
					instagram={instagramWhite}
					bottom='0'
					posBottom='1%'
				/>
			</section>
		</Fragment>
	);
};

export default Home;
