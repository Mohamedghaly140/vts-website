import React, { Fragment } from "react";
import { v4 as uuidV4 } from "uuid";
import Navbar from "../../Navbar/Navbar";
import Section from "../../UI/Section/Section";

// Content Model
import Content from "../../../Model/Content";

const aboutList = [
	new Content(
		uuidV4(),
		"our company",
		"Foundation:  Visionalization Technology Solutions (VTS) is a leading start up in the field of technology but with a different business model and new vision and orientation as we don’t provide just an IT product, we launch and build solutions for your business via technological tools through our services* and products We established our company in June 2019 and launched our branch in New Damietta city in Feb 2020 as one of the rarest companies to work by a fully integrated and dedicated systems which is comprehensive because we offer all the pillars of IT industry such Web development – business solutions (ERP, CRM) – IT consultancy – business digital transformation – branding – IOT"
	),
	new Content(
		uuidV4(),
		"why VTS?",
		"The most overwhelming advantages are concentrated in our business administration huge experiences and experts, this experience give us the chance to help you in reaching your goals and obtain your target just through unique tailored solutions Providing an effective software services and solutions is very necessary but adding the hardware solutions (IOT Devices) also and integrate both together via fully Egyptian labor and experts is what made us proud and add a huge business value to our customer's businesses and workflow."
	),
];

const About = props => {
	return (
		<Fragment>
			<Navbar bgcolor="#050615" />
			<Section title="About US" contents={aboutList} />
		</Fragment>
	);
};

export default About;
