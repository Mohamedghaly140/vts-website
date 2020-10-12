import React, { Fragment } from "react";
import classes from "./ContactCard.module.css";

import bgContact from "../../../assets/botton contact.png";
import message from "../../../assets/speech-bubble.png";

const ContactCard = props => {
	return (
		<Fragment>
			<div className="position-relative text-center">
				<img className="img-fluid" src={bgContact} alt="contact card" />
				<div className={classes.Card_Caption}>
					<div className={classes.Card_Image}>
						<img className="img-fluid" src={message} alt="speech-bubble" />
					</div>
					<div className={classes.Card_Title}>
						<h5 className="mb-0">Contact support</h5>
					</div>
					<div className={classes.Card_Body}>
						<p className="mb-0">
							Sometimes you need a little help.
							<br />
							Don't worry, We're here for you.
						</p>
					</div>
					<div className={classes.Card_Action}>
						<p className="mb-0">contact support</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ContactCard;
