import React from "react";
import classes from "./social.module.css";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";

const Social = ({ instagram, whatsApp, twitter, facebook, bottom, posBottom }) => {
	return (
		<footer className={classes.Social} style={{ paddingBottom: bottom, bottom: posBottom }}>
			<Container>
				<ul className="list-unstyled text-center py-1 mb-0">
					<li className="list-inline-item mx-3">
						<a
							href="https://api.whatsapp.com/send?phone=201060909402fbclid=IwAR2MnBUHZnyRSQP3c2Skb_9ORMHjhJwaahT5DuhwBG9JaNoVmueP_7M3-u0"
							target="_blank"
							rel="noopener noreferrer"
						>
							<OverlayTrigger
								overlay={
									<Tooltip id="tooltip-top">WhatsApp</Tooltip>
								}
							>
								<img
									className="img-fluid"
									src={whatsApp}
									alt="whatsApp"
								/>
							</OverlayTrigger>
						</a>
					</li>
					<li className="list-inline-item mx-3">
						<a
							href="https://www.instagram.com/visionalization1/?igshid=111d6rkqzs458"
							target="_blank"
							rel="noopener noreferrer"
						>
							<OverlayTrigger
								overlay={
									<Tooltip id="tooltip-top">
										Instagram
									</Tooltip>
								}
							>
								<img
									className="img-fluid"
									src={instagram}
									alt="instagram"
								/>
							</OverlayTrigger>
						</a>
					</li>
					<li className="list-inline-item mx-3">
						<a
							href="https://twitter.com/visionalization"
							target="_blank"
							rel="noopener noreferrer"
						>
							<OverlayTrigger
								overlay={
									<Tooltip id="tooltip-top">Twitter</Tooltip>
								}
							>
								<img
									className="img-fluid"
									src={twitter}
									alt="twitter"
								/>
							</OverlayTrigger>
						</a>
					</li>
					<li className="list-inline-item mx-3">
						<a
							href="https://www.facebook.com/visionalization"
							target="_blank"
							rel="noopener noreferrer"
						>
							<OverlayTrigger
								overlay={
									<Tooltip id="tooltip-top">Facebook</Tooltip>
								}
							>
								<img
									className="img-fluid"
									src={facebook}
									alt="facebook"
								/>
							</OverlayTrigger>
						</a>
					</li>
				</ul>
			</Container>
		</footer>
	);
};

Social.defaultProps = {
	bottom: "1rem",
};

export default Social;
