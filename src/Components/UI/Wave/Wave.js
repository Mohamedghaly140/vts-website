import React from "react";
import classes from "./wave.module.css";

import waveImage from "../../../assets/wave.png";
// import waveImage from "../../../assets/wavegif.gif";

const Wave = props => {
	return (
		<div className={classes.Wave}>
			<img className="img-fluid" src={waveImage} alt="visionalization" />
		</div>
	);
};

export default Wave;
