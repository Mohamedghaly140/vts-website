import React from "react";
import classes from "./section.module.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Container, Row, Col } from "react-bootstrap";

// import bgabout from "../../../assets/background about.png";
import bgtitle from "../../../assets/botton about.png";

import facebookBlack from "../../../assets/Facebook.png";
import twitterBlack from "../../../assets/Twitter.png";
import whatsAppBlack from "../../../assets/WhatsApp.png";
import instagramBlack from "../../../assets/Instagram.png";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";

import Social from "../Social/Social";

const Section = props => {
	return (
		<section className={classes.Main_section}>
			<Container>
				<div
					className="p-2 text-center position-relative m-auto"
					style={{ width: "215px" }}
				>
					<img className="img-fluid" src={bgtitle} alt="title" />
					<h3 className={classes.title}>{props.title}</h3>
				</div>
				<Row className="py-5">
					<Col
						md={6}
						className="d-flex justify-content-center align-items-center"
					>
						<OwlCarousel
							className="owl-theme"
							items={1}
							margin={0}
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
								<h4
									className="text-capitalize"
									style={{ color: "var(--color5)" }}
								>
									{props.firstTitle}
								</h4>
								<p className="text-justify">
									{props.firstParagh}
								</p>
							</div>
							<div className="item">
								<h4
									className="text-capitalize"
									style={{ color: "var(--color5)" }}
								>
									{props.secondTitle}
								</h4>
								<p className="text-justify">
									{props.secondParagh}
								</p>
							</div>
						</OwlCarousel>
					</Col>
					<Col md={6}>
						{/* <img className="img-fluid" src={props.src} alt={props.alt} /> */}
					</Col>
				</Row>
			</Container>
			<Social
				facebook={facebookBlack}
				twitter={twitterBlack}
				whatsApp={whatsAppBlack}
				instagram={instagramBlack}
			/>
		</section>
	);
};

export default Section;
