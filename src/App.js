import React, { Fragment, Suspense, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './Components/Pages/Home/Home';
// import About from './Components/Pages/About/About';
// import Contact from './Components/Pages/Contact/Contact';

// Services Components
// import BusinessDigital from './Components/Pages/Services/BusinessDigital/BusinessDigital';
// import WebDevelopemnt from './Components/Pages/Services/WebDevelopemnt/WebDevelopemnt';
// import ITConsultancy from './Components/Pages/Services/ITConsultancy/ITConsultancy';
// import CRM from './Components/Pages/Services/CRM/CRM';
// import ERP from './Components/Pages/Services/ERP/ERP';
// import IOT from './Components/Pages/Services/IOT/IOT';

// Not Found Component
import NotFound from './Components/NotFound/NotFound';

import PreLoaderPage from './Components/PreLoaderPage/PreLoaderPage';

// const Home = React.lazy(() => import('./Components/Pages/Home/Home'));
const About = React.lazy(() => import('./Components/Pages/About/About'));
const Contact = React.lazy(() => import('./Components/Pages/Contact/Contact'));

const BusinessDigital = React.lazy(() =>
	import('./Components/Pages/Services/BusinessDigital/BusinessDigital')
);
const WebDevelopemnt = React.lazy(() =>
	import('./Components/Pages/Services/WebDevelopemnt/WebDevelopemnt')
);
const ITConsultancy = React.lazy(() =>
	import('./Components/Pages/Services/ITConsultancy/ITConsultancy')
);
const CRM = React.lazy(() => import('./Components/Pages/Services/CRM/CRM'));
const ERP = React.lazy(() => import('./Components/Pages/Services/ERP/ERP'));
const IOT = React.lazy(() => import('./Components/Pages/Services/IOT/IOT'));

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 8000);
	}, []);

	return (
		<Fragment>
			<Switch>
				{loading ? (
					<PreLoaderPage />
				) : (
					<Route exact path='/' component={Home} />
				)}
				<Route
					path='/about'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<About />
						</Suspense>
					)}
				/>
				<Route
					path='/contact'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<Contact />
						</Suspense>
					)}
				/>
				<Route
					path='/business-digital-transformation'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<BusinessDigital />
						</Suspense>
					)}
				/>
				<Route
					path='/web-development'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<WebDevelopemnt />
						</Suspense>
					)}
				/>
				<Route
					path='/it-consultancy'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<ITConsultancy />
						</Suspense>
					)}
				/>
				<Route
					path='/crm'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<CRM />
						</Suspense>
					)}
				/>
				<Route
					path='/erp'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<ERP />
						</Suspense>
					)}
				/>
				<Route
					path='/iot'
					render={() => (
						<Suspense fallback={<PreLoaderPage />}>
							<IOT />
						</Suspense>
					)}
				/>
				<Route component={NotFound} />
			</Switch>
			{/* <PreLoaderPage /> */}
		</Fragment>
	);
};

export default App;
