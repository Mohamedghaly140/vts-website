import React, { Fragment } from 'react';
import classes from './iot.module.css';
import Navbar from '../../../Navbar/Navbar';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Container, Row, Col } from 'react-bootstrap';

import internetIot from '../../../../assets/internet iot1.png';
import internet from '../../../../assets/internet iot.png';
import internet3 from '../../../../assets/internet3.png';
import smartiot from '../../../../assets/smart iot.png';
import smartiot2 from '../../../../assets/smart iot2.png';
import bgtitle from '../../../../assets/botton about.png';

import facebookBlack from '../../../../assets/Facebook.png';
import twitterBlack from '../../../../assets/Twitter.png';
import whatsAppBlack from '../../../../assets/WhatsApp.png';
import instagramBlack from '../../../../assets/Instagram.png';
import arrowLeft from '../../../../assets/arrow-left.png';
import arrowRight from '../../../../assets/arrow-right.png';

import Social from '../../../UI/Social/Social';

const IOT = () => {
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
						<h3 className={classes.title}>IOT</h3>
					</div>
					<OwlCarousel
						className='owl-theme'
						items={1}
						margin={5}
						nav={true}
						dots={false}
						loop={true}
						autoplay={true}
						autoplayHoverPause={true}
						autoplayTimeout={10000}
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
											Internet of Things
										</h4>
										<p>
											IOT stands for Internet of Things,
											and if we try to simplify the
											concept of IOT we would describe it
											as any device which is any device
											connected to the internet with
											receiving and transmitting data and
											has the availability to communicate
											with other devices and servers.
										</p>
										<p>
											IOT devices in this era are very
											trendy and engaged in many critical
											industries and even in our daily
											life routine we are using a lot of
											those devices
										</p>
										<p>
											This is will let us to go through
											the most modern trend in the
											economic revolution which is IIOT
											(Industrial Internet of Things) And
											the most common trend in the field
											of constructions and real estate
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={internetIot}
										alt='internet Iot'
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
											Smart (company- factory-office-city
											home)
										</h4>
										<p>
											It refers to the application of IOT
											technology in industrial settings,
											especially concerning
											instrumentation and control of
											sensors and devices that engage
											cloud technologies. Recently,
											industries have used
											machine-to-machine communication
											(M2M) to achieve wireless automation
											and control. But with the emergence
											of cloud and allied technologies
											(such as analytics and machine
											learning), industries can achieve a
											new automation layer and with it
											create new revenue and business
											models. IIoT is sometimes called the
											fourth wave of the industrial
											revolution, or Industry.
										</p>
										<p>
											Using this technology in your
											industry will eliminate the human
											error factors which coasts you huge
											part from your profit and put a lot
											of obstacles in the way of your
											development
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={internet}
										alt='internet'
									/>
								</Col>
							</Row>
						</div>
						<div className='item'>
							<Row>
								<Col
									md={6}
									className='d-flex justify-content-start align-items-center'
								>
									<div>
										<h4
											className='text-capitalize'
											style={{
												color: 'var(--color5)',
											}}
										>
											Smart (company- factory-office-city
											home)
										</h4>
										<p>
											Work with your dedicated devices and
											our engineers are ready to create
											multi-platform sand fully integrated
											IOT apps for your factory or
											business using state-of-the-art
											integrated architectures fitted to
											your model via enhancing your
											machine productivity and transfer it
											as a smart machine with the ability
											to detect its current status any
											time{' '}
										</p>
										<p>
											You will obtain this service via our
											fully Egyptian made smart IOT
											devices:
										</p>
										<ul>
											<li>Machine disruption card </li>
											<li>Car tracking system </li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={internet3}
										alt='internet3'
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
											Smart (company- factory-office-city
											home)
										</h4>
										<p>
											You could contact us to know our
											packages and offers in the smart
											systems{' '}
										</p>
										<p>
											We provide unique experience for you
											in transferring your property into
											smart
										</p>
										<p>
											We offer a fully integrated smart
											system which give you high welfare
											and a chance to control your
											company, home or office remotely
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={smartiot}
										alt='smart iot'
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
											Smart factory:
										</h4>
										<p>
											We considered it as a different type
											of service as it extends to merge
											the IIOT devices with the smart
											system we provide to get a fully
											comprehensive and integrated smart
											factory with a great control arms in
											all of your sections of your factory
											through all machines, light system,
											air conditioners and etc.
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={smartiot2}
										alt='smart iot'
									/>
								</Col>
							</Row>
						</div>
					</OwlCarousel>
				</Container>
			</section>
			<Social
				facebook={facebookBlack}
				twitter={twitterBlack}
				whatsApp={whatsAppBlack}
				instagram={instagramBlack}
				bottom='0'
			/>
		</Fragment>
	);
};

export default IOT;
