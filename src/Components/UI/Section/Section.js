import React from "react";
import classes from "./section.module.css";

import { Container, Row, Col } from "react-bootstrap";

// import bgabout from "../../../assets/background about.png";
import bgtitle from "../../../assets/botton about.png";

import facebookBlack from "../../../assets/Facebook.png";
import twitterBlack from "../../../assets/Twitter.png";
import whatsAppBlack from "../../../assets/WhatsApp.png";
import instagramBlack from "../../../assets/Instagram.png";

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
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Laudantium, a explicabo facere, fugiat accusantium laborum
							accusamus praesentium veritatis quod iusto iste autem adipisci ex
							doloremque minus quos quidem numquam consequuntur veniam, mollitia
							voluptatem dolorem! Ipsam consequuntur sunt unde molestiae
							corrupti. veritatis quod iusto iste autem adipisci ex doloremque
							minus quos quidem numquam consequuntur veniam, mollitia voluptatem
							dolorem! Ipsam consequuntur sunt unde molestiae corrupti.
						</p>
					</Col>
					<Col md={6}>
						{/* <img className="img-fluid" src={bgabout} alt="" /> */}
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
