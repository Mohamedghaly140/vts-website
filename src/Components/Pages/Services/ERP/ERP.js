import React, { Fragment } from "react";
import { stringify, v4 as uuidV4 } from "uuid";
import Navbar from "../../../Navbar/Navbar";
import Section from "../../../UI/Section/Section";

// Content Model
import Content from "../../../../Model/Content";

const firstSec = [
	{
		id: uuidV4(),
		listitem: "Boosts its revenues",
	},
	{
		id: uuidV4(),
		listitem: "Improve the operational performance",
	},
	{
		id: uuidV4(),
		listitem: "Align all of your departments in the same workflow.",
	},
	{
		id: uuidV4(),
		listitem: "Develop real time informational reports",
	},
	{
		id: uuidV4(),
		listitem: "Decrease operational time and wasted resources",
	},
	{
		id: uuidV4(),
		listitem:
			"Reduces Risk through efficient data integrity and controlled financial operations",
	},
	{
		id: uuidV4(),
		listitem:
			"increase collaboration between the employee and control their morals and KPIs",
	},
	{
		id: uuidV4(),
		listitem:
			"build consistent infrastructure and be transferred from paper and traditional style to efficient technological model",
	},
];

let list1 = (
	<ul>
		{firstSec.map(item => (
			<li key={item.id}>{item.listitem}</li>
		))}
	</ul>
);

const secondSec = [
	{
		id: uuidV4(),
		listitem: `VTS provides efficient Tailored ERP solutions which serve your needs without useless high cost tools ${(
			<br />
		)} Statistically: Un tailored ERP Systems Fails 60% because it doesn't cover enterprises needs and challenges.`,
	},
	{
		id: uuidV4(),
		listitem: `Our experts in the field of business administration, finance, accounting, management and marketing will help you to reach your target and make your vision prevails.`,
	},
	{
		id: uuidV4(),
		listitem: `The automation and the integration between ERP System and the department of IIOT which will give you overwhelming control on your workflow, real-time data entry and decreasing human errors.`,
	},
];

let list2 = (
	<ul>
		{secondSec.map(item => (
			<li key={item.id}>{item.listitem}</li>
		))}
	</ul>
);

const crmList = [
	new Content(
		uuidV4(),
		"Enterprise resource planning (ERP):",
		`is modular software system designed to gather all the enterprise resources and to integrate the main functions of an organization's business processes into a unified efficient system. ${(
			<br />
		)} This system solidarity and integration keep you away of being ignorant with your tiny details in your business cause the distinguish benefit of this software system which is a central database in which modules record transactions, operations and other information with access to that data and share it. ${(
			<br />
		)} An ERP system consists of software components, usually called modules, that each focus on an essential business function, such as finance and accounting, HR, production planning and control, Inventory management and supply chain management.`
	),
	new Content(
		uuidV4(),
		"Enterprise resource planning (ERP):",
		`On a narrow scale, the integration between modules that enables them and their users to interact. For a simple example, a sales order created will be shared with the production module, so the manufacturing department will have the information about what product to make. ${(
			<br />
		)} When the product is shipped, data in the inventory management module changes, and when the customer pays, the accounting module records the revenue. ${(
			<br />
		)} And so on but on wide, fast and complicated scale. So, the problems such Project Management & Disorganization, communication and delivery commitment would be solved easily.`
	),
	new Content(
		uuidV4(),
		"The business value of ERP:",
		`The high impact nowadays on the business with essential software solutions is shown obviously and no one could deny it, and the ERP is considered as the most valuable tool in the enterprises as it. ${list1}`
	),
	new Content(uuidV4(), "GET STARTED WITH VTS ERP BUT WHY VTS ERP!", list2),
];

const ERP = () => {
	return (
		<Fragment>
			<Navbar bgcolor="#050615" />
			<Section title="ERP" contents={crmList} />
		</Fragment>
	);
};

export default ERP;
