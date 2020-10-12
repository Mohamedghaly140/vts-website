import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";

const App = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</Switch>
			{/* <Section /> */}
		</Fragment>
	);
};

export default App;
