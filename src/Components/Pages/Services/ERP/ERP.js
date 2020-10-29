import React, { Fragment } from "react";
import classes from "./erp.module.css";
import Navbar from "../../../Navbar/Navbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Container, Row, Col } from "react-bootstrap";

import erp from "../../../../assets/erp.png";
import bgtitle from "../../../../assets/botton about.png";

import facebookBlack from "../../../../assets/Facebook.png";
import twitterBlack from "../../../../assets/Twitter.png";
import whatsAppBlack from "../../../../assets/WhatsApp.png";
import instagramBlack from "../../../../assets/Instagram.png";
import arrowLeft from "../../../../assets/arrow-left.png";
import arrowRight from "../../../../assets/arrow-right.png";

import Social from "../../../UI/Social/Social";

const ERP = () => {
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
						<h3 className={classes.title}>ERP</h3>
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
											Enterprise resource planning (ERP):
										</h4>
										<p>
											is modular software system designed
											to gather all the enterprise
											resources and to integrate the main
											functions of an organization's
											business processes into a unified
											efficient system.
										</p>
										<p>
											This system solidarity and
											integration keep you away of being
											ignorant with your tiny details in
											your business cause the distinguish
											benefit of this software system
											which is a central database in which
											modules record transactions,
											operations and other information
											with access to that data and share
											it.
										</p>
										<p>
											An ERP system consists of software
											components, usually called modules,
											that each focus on an essential
											business function, such as finance
											and accounting, HR, production
											planning and control, Inventory
											management and supply chain
											management.
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
											src={erp}
											alt="erp"
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

export default ERP;
