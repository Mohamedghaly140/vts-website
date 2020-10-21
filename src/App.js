import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import VisionMision from "./Components/Pages/VisionMision/VisionMision";

// Services Components
import BusinessDigital from "./Components/Pages/Services/BusinessDigital/BusinessDigital";
import WebDevelopemnt from "./Components/Pages/Services/WebDevelopemnt/WebDevelopemnt";
import ITConsultancy from "./Components/Pages/Services/ITConsultancy/ITConsultancy";
import CRM from "./Components/Pages/Services/CRM/CRM";
import ERP from "./Components/Pages/Services/ERP/ERP";
import IOT from "./Components/Pages/Services/IOT/IOT";

const App = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/vision-mision" component={VisionMision} />
				<Route
					path="/business-digital-transformation"
					component={BusinessDigital}
				/>
				<Route path="/web-development" component={WebDevelopemnt} />
				<Route path="/it-consultancy" component={ITConsultancy} />
				<Route path="/crm" component={CRM} />
				<Route path="/erp" component={ERP} />
				<Route path="/iot" component={IOT} />
			</Switch>
			{/* <Section /> */}
		</Fragment>
	);
};

export default App;
