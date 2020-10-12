import React from "react";
import classes from "./wave.module.css";

import waveImage from "../../../assets/wave.png";

const Wave = props => {
	return (
		<div className={classes.Wave}>
			<img className="img-fluid" src={waveImage} alt="visionalization" />
		</div>
	);
};

export default Wave;
