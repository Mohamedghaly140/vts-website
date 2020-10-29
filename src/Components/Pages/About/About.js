import React, { Fragment } from "react";
import classes from "./about.module.css";
import Navbar from "../../Navbar/Navbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Container, Row, Col } from "react-bootstrap";

import erp from "../../../assets/erp.png";
import bgtitle from "../../../assets/botton about.png";

import facebookBlack from "../../../assets/Facebook.png";
import twitterBlack from "../../../assets/Twitter.png";
import whatsAppBlack from "../../../assets/WhatsApp.png";
import instagramBlack from "../../../assets/Instagram.png";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";

import Social from "../../UI/Social/Social";

const About = props => {
	return (
		<Fragment>
			<Navbar bgcolor="#050615" />
			<section className={classes.Main_section}>
				<Container>
					<div
						className="p-2 text-center position-relative m-auto"
						style={{ width: "215px" }}
					>
						<img className="img-fluid" src={bgtitle} alt="title" />
						<h3 className={classes.title}>About</h3>
					</div>
					<OwlCarousel
						className="owl-theme"
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
						<div className="item">
							<Row>
								<Col
									md={8}
									className="d-flex justify-content-center align-items-center"
								>
									<div>
										<h4
											className="text-capitalize"
											style={{
												color: "var(--color5)",
											}}
										>
											our company
										</h4>
										<p>
											Foundation: Visionalization
											Technology Solutions (VTS) is a
											leading start up in the field of
											technology but with a different
											business model and new vision and
											orientation as we don’t provide just
											an IT product, we launch and build
											solutions for your business via
											technological tools through our
											services (redirect) and products
										</p>
										<p>
											We established our company in June
											2019 and launched our branch in New
											Damietta city in Feb 2020 as one of
											the rarest companies to work by a
											fully integrated and dedicated
											systems which is comprehensive
											because we offer all the pillars of
											IT industry such Web development –
											business solutions (ERP, CRM) – IT
											consultancy – business digital
											transformation – branding – IOT
										</p>
									</div>
								</Col>
								<Col
									md={4}
									className="d-flex justify-content-center align-items-center"
								>
									{/* <img
										className="img-fluid"
										src={erp}
										alt="erp"
									/> */}
								</Col>
							</Row>
						</div>
						<div className="item">
							<Row>
								<Col
									md={8}
									className="d-flex justify-content-center align-items-center"
								>
									<div>
										<h4
											className="text-capitalize"
											style={{
												color: "var(--color5)",
											}}
										>
											why VTS?
										</h4>
										<p>
											The most overwhelming advantages are
											concentrated in our business
											administration huge experiences and
											experts, this experience give us the
											chance to help you in reaching your
											goals and obtain your target just
											through unique tailored solutions
										</p>
										<p>
											Providing an effective software
											services and solutions is very
											necessary but adding the hardware
											solutions (IOT Devices) also and
											integrate both together via fully
											Egyptian labor and experts is what
											made us proud and add a huge
											business value to our customer's
											businesses and workflow.
										</p>
									</div>
								</Col>
								<Col
									md={4}
									className="d-flex justify-content-center align-items-center"
								>
									{/* <img
										className="img-fluid"
										src={erp}
										alt="erp"
									/> */}
								</Col>
							</Row>
						</div>
						<div className="item">
							<Row>
								<Col
									md={8}
									className="d-flex justify-content-center align-items-center"
								>
									<div>
										<h4
											className="text-capitalize"
											style={{
												color: "var(--color5)",
											}}
										>
											Vision &amp; Mission:
										</h4>
										<p className="mt-4">
											Vision →
											<br />
											novel tool for every arm (
											Efficiency committed – integration )
										</p>
										<p>
											Mission → <br />
											Our mission is concentrated in being
											engaging with our customers in
											facing business obstacles,
											maximizing their profit stream,
											return on investment (ROI).
										</p>
									</div>
								</Col>
								<Col
									md={4}
									className="d-flex justify-content-center align-items-center"
								>
									{/* <img
										className="img-fluid"
										src={erp}
										alt="erp"
									/> */}
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
				bottom="0"
			/>
			s
		</Fragment>
	);
};

export default About;
