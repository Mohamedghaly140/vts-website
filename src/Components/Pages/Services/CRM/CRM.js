import React, { Fragment } from 'react';
import classes from './crm.module.css';
import Navbar from '../../../Navbar/Navbar';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Container, Row, Col } from 'react-bootstrap';

import crm from '../../../../assets/crm.png';
import accurate from '../../../../assets/accurate forecast.png';
import tools from '../../../../assets/more tools - less efforts.png';
import feature from '../../../../assets/feature.png';
import profit from '../../../../assets/profile.png';
import usecrm from '../../../../assets/usxe crm.png';
import bgtitle from '../../../../assets/botton about.png';

import facebookBlack from '../../../../assets/Facebook.png';
import twitterBlack from '../../../../assets/Twitter.png';
import whatsAppBlack from '../../../../assets/WhatsApp.png';
import instagramBlack from '../../../../assets/Instagram.png';
import arrowLeft from '../../../../assets/arrow-left.png';
import arrowRight from '../../../../assets/arrow-right.png';

import Social from '../../../UI/Social/Social';

const CRM = () => {
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
						<h3 className={classes.title}>CRM</h3>
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
											Customer relationship management
											(CRM)
										</h4>
										<p>
											refers to the principles, practices,
											and guidelines that an organization
											follows when interacting with its
											customers.
										</p>
										<p>
											IT gathers customer interactions
											across all channels in one place.
											Managing centralized data helps
											businesses improve customer
											experience, satisfaction, retention
											and services also allows businesses
											of all sizes to drive growth and
											profits.
										</p>
										<p>
											We could consider it is an approach
											that helps businesses improve
											existing customer relationships and
											acquire new customers faster and if
											we need to give a technical
											definition for it we could say it
											acts as a single repository to bring
											your sales, marketing, and customer
											support activities together, and
											streamline your process, policy, and
											people in one platform.
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={crm}
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
											why use CRM ?
										</h4>
										<p>
											CRM is the largest software market
											in the world, and has increasingly
											proven to be the best technological
											asset that companies can invest in,
											so don’t hesitate to contact us and
											ask more about our CRM modules and
											its benefits.
										</p>
										<p>
											We have the ability to build
											tailored CRM software for your needs
											only
										</p>
										<h4>One size doesn't fit all </h4>
										<p>
											That’s going to be delivered via a
											lot of features which could offer
											according to your need{' '}
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={usecrm}
										alt='crm'
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
									<div className='w-100'>
										<div className='d-flex justify-content-center align-items-center'>
											<h3
												style={{
													color: 'var(--color5)',
												}}
											>
												CRM benefits
											</h3>
										</div>
										<h4
											className='text-capitalize'
											style={{
												color: 'var(--color5)',
											}}
										>
											Features:
										</h4>
										<ul>
											<li>Contact Management</li>
											<li>Leads Management</li>
											<li>Analytics</li>
											<li>KPIs</li>
											<li>Mobile CRM</li>
											<li>Dashboard and Reports</li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={feature}
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
									<div className='w-100'>
										<div className='d-flex justify-content-center align-items-center'>
											<h3
												style={{
													color: 'var(--color5)',
												}}
											>
												CRM benefits
											</h3>
										</div>
										<h4
											className='text-capitalize'
											style={{
												color: 'var(--color5)',
											}}
										>
											Accurate forecast:
										</h4>
										<ul>
											<li>
												You will be able to make
												suitable and smart business
												decisions depending on accurate
												data and precise forecasts.
											</li>
											<li>
												we design a tailored dashboard
												for your business which will
												keep you in a daily situational
												awareness and give you a watch
												on the daily operations.
											</li>
											<li>
												Extract real time reports,
												Graphs and flow charts.
											</li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={accurate}
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
									<div className='w-100'>
										<div className='d-flex justify-content-center align-items-center'>
											<h3
												style={{
													color: 'var(--color5)',
												}}
											>
												CRM benefits
											</h3>
										</div>
										<h4
											className='text-capitalize'
											style={{
												color: 'var(--color5)',
											}}
										>
											More Tools – less Efforts:
										</h4>
										<ul>
											<li>
												Give your sales team scheduled
												activities depending on their
												working hours toward the golden
												clients whom represent your main
												revenue stream and you will rank
												them correctly.
											</li>
											<li>
												stay connected with your
												customers and keep informed with
												their history and sales log
												without spending useless time in
												connecting your sales team or
												your customer support with your
												customers.
											</li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={tools}
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
											Step on Your Profit:
										</h4>
										<ul>
											<li>
												Get a quick overview of what's
												going on with your team, whom is
												the best sales employee and whom
												is shooting out of the target
											</li>
											<li>
												Know How you are performing
												towards your annual target.
											</li>
											<li>
												Organize your next events like
												marketing campaigns and business
												actions depending on your
												expected profit.
											</li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									className='d-flex justify-content-center align-items-center'
								>
									<img
										className='img-fluid'
										src={profit}
										alt='crm'
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

export default CRM;
