import React, { Fragment } from "react";
import classes from "./business.module.css";
import Navbar from "../../../Navbar/Navbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Container, Row, Col } from "react-bootstrap";

import buAndTrch from "../../../../assets/bu and trch.png";
import busSeveral from "../../../../assets/bus several.png";
import bgtitle from "../../../../assets/botton about.png";

import facebookBlack from "../../../../assets/Facebook.png";
import twitterBlack from "../../../../assets/Twitter.png";
import whatsAppBlack from "../../../../assets/WhatsApp.png";
import instagramBlack from "../../../../assets/Instagram.png";
import arrowLeft from "../../../../assets/arrow-left.png";
import arrowRight from "../../../../assets/arrow-right.png";

import Social from "../../../UI/Social/Social";

const BusinessDigital = () => {
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
						<h3
							className={classes.title}
							style={{ fontSize: "19px" }}
						>
							Business Digital Transformation
						</h3>
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
									md={6}
									className="d-flex justify-content-center align-items-center"
								>
									<div>
										<h4
											className="text-capitalize"
											style={{
												color: "var(--color5)",
											}}
										>
											Digital Transformation is the
											integration between business and
											technology
										</h4>
										<p>
											In all pillars of your work flow,
											simply its changing the operational
											methodology you are dealing with
											your customers through and how you
											are dealing and treating with them.
										</p>
										<p>
											This change is from the manually
											traditional methods to a central and
											collective softcopy data bases which
											is more efficient for your business
										</p>
										<p>
											Nowadays, supply chain management is
											a very important trend and you won't
											be able to cope with if you don’t
											have smart and digital workflow.
										</p>
										<p className="text-muted text-center mb-0">
											Transformations are hard, and
											digital ones are harder
											<br />
											But Why does digital transformation
											matter!
										</p>
									</div>
								</Col>
								<Col
									md={6}
									className="d-flex justify-content-center align-items-center"
								>
									<div className="position-relative">
										<img
											className="img-fluid"
											src={buAndTrch}
											alt="business and technology"
										/>
									</div>
								</Col>
							</Row>
						</div>
						<div className="item">
							<Row>
								<Col
									md={6}
									className="d-flex justify-content-center align-items-center"
								>
									<div>
										<h4
											className="text-capitalize"
											style={{
												color: "var(--color5)",
											}}
										>
											A business may take on digital
											transformation for several reasons:
										</h4>
										<ul>
											<li>
												it requires the right leadership
												and employees: technology will
												engage the suitable employees to
												your work scalability with the
												necessary skills.
											</li>
											<li>
												Digital transformation is
												comprehensive and holistic. It
												covers a huge number of
												processes, interactions,
												transactions, technological
												evolutions, changes, internal
												and external factors,
												industries, and so forth.
											</li>
											<li>
												it is not just about technology:
												it exceeds all of this as
												Successful digital
												transformations do not begin
												with technology. Instead, they
												focus on overhauling the
												organization with a
												customer-focused goal in mind.
											</li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									className="d-flex justify-content-center align-items-center"
								>
									<div className="position-relative">
										<img
											className="img-fluid"
											src={busSeveral}
											alt="business several reasons"
										/>
									</div>
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
		</Fragment>
	);
};

export default BusinessDigital;
