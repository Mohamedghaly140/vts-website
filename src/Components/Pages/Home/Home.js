import React, { Fragment } from "react";
import classes from "./home.module.css";

import Navbar from "../../Navbar/Navbar";
import Wave from "../../UI/Wave/Wave";
import Social from "../../UI/Social/Social";

// Social Images
import facebookWhite from "../../../assets/Facebook1.png";
import twitterWhite from "../../../assets/Twitter1.png";
import whatsAppWhite from "../../../assets/WhatsApp1.png";
import instagramWhite from "../../../assets/Instagram1.png";

const Home = props => {
	return (
		<Fragment>
			<Navbar bgcolor="transparent" />
			<section className={classes.Home}>
				<div className={classes.Overlay}></div>
				<Wave />
				<Social
					facebook={facebookWhite}
					twitter={twitterWhite}
					whatsApp={whatsAppWhite}
					instagram={instagramWhite}
				/>
			</section>
		</Fragment>
	);
};

export default Home;
