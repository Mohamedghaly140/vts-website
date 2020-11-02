import React, { Fragment } from "react";
import classes from "./home.module.css";

import Navbar from "../../Navbar/Navbar";
import Wave from "../../UI/Wave/Wave";
import Social from "../../UI/Social/Social";

import bar from "../../../assets/Place Your Design Here (Double Click to Edit)-1.png";

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
				<div className={classes.Caption}>
					<div className="d-flex justify-content-between align-items-center">
						<div
							className="d-none d-md-block"
							style={{ width: "14px" }}
						>
							<img className="img-fluid" src={bar} alt="bar" />
						</div>
						<div className="ml-4 w-100">
							<h1>Your</h1>
							<h2 className="text-capitalize">Vision Prevails</h2>
						</div>
					</div>
				</div>
				<Wave />
				<Social
					facebook={facebookWhite}
					twitter={twitterWhite}
					whatsApp={whatsAppWhite}
					instagram={instagramWhite}
					bottom="0"
					posBottom="1%"
				/>
			</section>
		</Fragment>
	);
};

export default Home;
