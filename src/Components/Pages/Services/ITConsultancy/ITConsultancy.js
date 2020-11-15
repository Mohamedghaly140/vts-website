import React, { Fragment } from 'react';
import Navbar from '../../../Navbar/Navbar';
import classes from './it.module.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Container, Row, Col } from 'react-bootstrap';

import itConsultancy from '../../../../assets/it constantly.png';
import bgtitle from '../../../../assets/botton about.png';

import facebookBlack from '../../../../assets/Facebook.png';
import twitterBlack from '../../../../assets/Twitter.png';
import whatsAppBlack from '../../../../assets/WhatsApp.png';
import instagramBlack from '../../../../assets/Instagram.png';
import arrowLeft from '../../../../assets/arrow-left.png';
import arrowRight from '../../../../assets/arrow-right.png';

import Social from '../../../UI/Social/Social';

const ITConsultancy = () => {
	return (
		<Fragment>
			<Navbar bgcolor='#050615' />
			<section className={classes.Main_section}>
				<Container>
					<div
						className='p-2 text-center position-relative m-auto'
						style={{ width: '215px' }}
					>
						<img className='img-fluid' src={bgtitle} alt='title' />
						<h3
							className={classes.title}
							style={{ fontSize: '20px' }}
						>
							IT Consultancy
						</h3>
					</div>
					<OwlCarousel
						className='owl-theme'
						items={1}
						margin={5}
						nav={true}
						dots={false}
						loop={false}
						autoplay={true}
						autoplayHoverPause={true}
						autoplayTimeout={15000}
						navText={[
							`<img className="img-fluid" style="width: 12px" src=${arrowLeft} alt="arrowLeft" />`,
							`<img className="img-fluid" style="width: 12px" src=${arrowRight} alt="arrowLeft" />`,
						]}
					>
						<div className='item'>
							<Row>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<div>
										<h4
											className='text-capitalize'
											style={{
												color: 'var(--color5)',
											}}
										>
											Visionaliztion technology solutions
										</h4>
										<p>
											Visionaliztion technology solutions
											provide effective IT infrastructure
											services and support for both short-
											and long-term services
										</p>
										<p>
											We have highly qualified resources
											to ensure that your business is
											ready to handle IT operations,
											projects and daily IT administration
											tasks or revamp your existed IT
											environment and solve all the
											technical issues you face simply and
											correctly{' '}
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={itConsultancy}
										alt='crm'
									/>
								</Col>
							</Row>
						</div>
						<div className='item'>
							<Row>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<div>
										<h4
											className='text-capitalize'
											style={{
												color: 'var(--color5)',
											}}
										>
											Visionaliztion technology solutions
										</h4>
										<p>
											It doesn't stop only in the
											consultation of the technology
											itself it extends to give your
											business unique solutions via
											technological tools with a huge
											experience in business
											administration and marketing{' '}
										</p>
										<p>
											We analyze your business needs and
											help you make strategic decisions on
											the fast and successful
											implementation of business-critical
											solutions.
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={itConsultancy}
										alt='crm'
									/>
								</Col>
							</Row>
						</div>
					</OwlCarousel>
				</Container>
				<Social
					facebook={facebookBlack}
					twitter={twitterBlack}
					whatsApp={whatsAppBlack}
					instagram={instagramBlack}
					bottom='0'
				/>
			</section>
		</Fragment>
	);
};

export default ITConsultancy;
