import React from "react";
import vtsLogo from "../../../assets/VTS final logo.png";

const Logo = props => {
	return (
		<div style={{ width: "160px" }}>
			<img className="img-fluid" src={vtsLogo} alt="VTS Logo" />
		</div>
	);
};

export default Logo;
