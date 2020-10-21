import React, { Fragment } from "react";
import { v4 as uuidV4 } from "uuid";
import Navbar from "../../../Navbar/Navbar";
import Section from "../../../UI/Section/Section";

// Content Model
import Content from "../../../../Model/Content";

const unlistbusiness = [
	{
		id: uuidV4(),
		listitem:
			"it requires the right leadership and employees: technology will engage the suitable employees to your work scalability with the necessary skills.",
	},
	{
		id: uuidV4(),
		listitem:
			"Digital transformation is comprehensive and holistic. It covers a huge number of processes, interactions, transactions, technological evolutions, changes, internal and external factors, industries, and so forth.",
	},
	{
		id: uuidV4(),
		listitem:
			"it is not just about technology: it exceeds all of this as Successful digital transformations do not begin with technology. Instead, they focus on overhauling the organization with a customer-focused goal in mind.",
	},
];

let list = (
	<ul>
		{unlistbusiness.map(item => (
			<li key={item.id}>{item.listitem}</li>
		))}
	</ul>
);

const businessList = [
	new Content(
		uuidV4(),
		"Digital Transformation is the integration between business and technology",
		"In all pillars of your work flow, simply its changing the operational methodology you are dealing with your customers through and how you are dealing and treating with them. This change is from the manually traditional methods to a central and collective softcopy data bases which is more efficient for your business Nowadays, supply chain management is a very important trend and you won't be able to cope with if you don’t have smart and digital workflow."
	),
	new Content(
		uuidV4(),
		"A business may take on digital transformation for several reasons:",
		list
	),
];

const BusinessDigital = () => {
	return (
		<Fragment>
			<Navbar bgcolor="#050615" />
			<Section
				title="Business Digital Transformation"
				fontSize="18px"
				contents={businessList}
			/>
		</Fragment>
	);
};

export default BusinessDigital;
