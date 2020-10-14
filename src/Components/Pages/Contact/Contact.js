import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../../Navbar/Navbar";
import ContactCard from "../../UI/ContactCard/ContactCard";
import Social from "../../UI/Social/Social";
import MainMap from "../../UI/Map/Map";

// Social Images
import facebookBlack from "../../../assets/Facebook.png";
import twitterBlack from "../../../assets/Twitter.png";
import whatsAppBlack from "../../../assets/WhatsApp.png";
import instagramBlack from "../../../assets/Instagram.png";

const Contact = props => {
	return (
		<Fragment>
			<Navbar bgcolor="#050615" />
			<section className="pt-5">
				<Container className="pt-5">
					<Row>
						<Col md={6} sm={12}>
							<ContactCard />
						</Col>
						<Col md={6} sm={12}>
							<ContactCard />
						</Col>
					</Row>
					<Row>
						<Col sm={12}>
							<MainMap />
						</Col>
					</Row>
				</Container>
			</section>
			<Social
				facebook={facebookBlack}
				twitter={twitterBlack}
				whatsApp={whatsAppBlack}
				instagram={instagramBlack}
			/>
		</Fragment>
	);
};

export default Contact;
