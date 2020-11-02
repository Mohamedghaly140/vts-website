import React, { Fragment } from "react";
import classes from "./erp.module.css";
import Navbar from "../../../Navbar/Navbar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Container, Row, Col } from "react-bootstrap";

import erp from "../../../../assets/erp.png";
import vtsErp from "../../../../assets/vts erp.png";
import businessErp from "../../../../assets/business erp.png";
import planningErp from "../../../../assets/planning erp.png";
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
											src={planningErp}
											alt="erp"
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
											Enterprise resource planning (ERP):
										</h4>
										<p>
											On a narrow scale, the integration
											between modules that enables them
											and their users to interact. For a
											simple example, a sales order
											created will be shared with the
											production module, so the
											manufacturing department will have
											the information about what product
											to make. When the product is
											shipped, data in the inventory
											management module changes, and when
											the customer pays, the accounting
											module records the revenue. And so
											on but on wide, fast and complicated
											scale.
										</p>
										<p>
											So, the problems such Project
											Management &amp; Disorganization,
											communication and delivery
											commitment would be solved easily.
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
						<div className="item">
							<Row>
								<Col
									md={7}
									className="d-flex justify-content-center align-items-center"
								>
									<div>
										<h4
											className="text-capitalize"
											style={{
												color: "var(--color5)",
											}}
										>
											The business value of ERP:
										</h4>
										<p>
											The high impact nowadays on the
											business with essential software
											solutions is shown obviously and no
											one could deny it, and the ERP is
											considered as the most valuable tool
											in the enterprises as it
										</p>
										<ul>
											<li>Boosts its revenues</li>
											<li>
												Improve the operational
												performance
											</li>
											<li>
												Align all of your departments in
												the same workflow
											</li>
											<li>
												Develop real time informational
												reports{" "}
											</li>
											<li>
												Decrease operational time and
												wasted resources{" "}
											</li>
											<li>
												Reduces Risk through efficient
												data integrity and controlled
												financial operations
											</li>
											<li>
												increase collaboration between
												the employee and control their
												morals and KPIs
											</li>
											<li>
												build consistent infrastructure
												and be transferred from paper
												and traditional style to
												efficient technological model{" "}
											</li>
										</ul>
									</div>
								</Col>
								<Col
									md={5}
									className="d-flex justify-content-center align-items-center"
								>
									<div className="position-relative">
										<img
											className="img-fluid"
											src={businessErp}
											alt="erp"
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
											GET STARTED WITH VTS ERP BUT WHY VTS
											ERP!
										</h4>

										<ul>
											<li>
												VTS provides efficient Tailored
												ERP solutions which serve your
												needs without useless high cost
												tools{" "}
											</li>
											<li>
												Statistically: Un tailored ERP
												Systems Fails 60% because it
												doesn't cover enterprises needs
												and challenges.
											</li>
											<li>
												Our experts in the field of
												business administration,
												finance, accounting, management
												and marketing will help you to
												reach your target and make your
												vision prevails.
											</li>
											<li>
												The automation and the
												integration between ERP System
												and the department of IIOT which
												will give you overwhelming
												control on your workflow,
												real-time data entry and
												decreasing human errors.
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
											src={vtsErp}
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
