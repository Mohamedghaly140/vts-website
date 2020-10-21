import React, { Fragment } from "react";
import { v4 as uuidV4 } from "uuid";
import Navbar from "../../../Navbar/Navbar";
import Section from "../../../UI/Section/Section";

// Content Model
import Content from "../../../../Model/Content";

const firstSec = [
	{
		id: uuidV4(),
		listitem:
			"You will be able to make suitable and smart business decisions depending on accurate data and precise forecasts.",
	},
	{
		id: uuidV4(),
		listitem:
			"we design a tailored dashboard for your business which will keep you in a daily situational awareness and give you a watch on the daily operations.",
	},
	{
		id: uuidV4(),
		listitem: "Extract real time reports, Graphs and flow charts.",
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
		listitem:
			"Give your sales team scheduled activities depending on their working hours toward the golden clients whom represent your main revenue stream and you will rank them correctly.",
	},
	{
		id: uuidV4(),
		listitem:
			"stay connected with your customers and keep informed with their history and sales log without spending useless time in connecting your sales team or your customer support with your customers.",
	},
];

let list2 = (
	<ul>
		{secondSec.map(item => (
			<li key={item.id}>{item.listitem}</li>
		))}
	</ul>
);

const thirdSec = [
	{
		id: uuidV4(),
		listitem:
			"Get a quick overview of what's going on with your team, whom is the best sales employee and whom is shooting out of the target.",
	},
	{
		id: uuidV4(),
		listitem: "Know How you are performing towards your annual target.",
	},
	{
		id: uuidV4(),
		listitem:
			"Organize your next events like marketing campaigns and business actions depending on your expected profit.",
	},
];

let list3 = (
	<ul>
		{secondSec.map(item => (
			<li key={item.id}>{item.listitem}</li>
		))}
	</ul>
);

const crmList = [
	new Content(
		uuidV4(),
		"Customer Relationship Management (CRM)",
		"Customer relationship management (CRM) refers to the principles, practices, and guidelines that an organization follows when interacting with its customers. IT gathers customer interactions across all channels in one place. Managing centralized data helps businesses improve customer experience, satisfaction, retention and services also allows businesses of all sizes to drive growth and profits. We could consider it is an approach that helps businesses improve existing customer relationships and acquire new customers faster and if we need to give a technical definition for it we could say it acts as a single repository to bring your sales, marketing, and customer support activities together, and streamline your process, policy, and people in one platform. CRM is the largest software market in the world, and has increasingly proven to be the best technological asset that companies can invest in, so don’t hesitate to contact us and ask"
	),
	new Content(uuidV4(), "Accurate forecast:", list1),
	new Content(uuidV4(), "More Tools – less Efforts", list2),
	new Content(uuidV4(), "Step on Your Profit", list3),
];

const CRM = () => {
	return (
		<Fragment>
			<Navbar bgcolor="#050615" />
			<Section title="CRM" contents={crmList} />
		</Fragment>
	);
};

export default CRM;
