import React, { Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './Components/Pages/Home/Home';

// Not Found Component
import NotFound from './Components/NotFound/NotFound';

import PreLoaderPage from './Components/PreLoaderPage/PreLoaderPage';

const About = React.lazy(() => import('./Components/Pages/About/About'));
const Contact = React.lazy(() => import('./Components/Pages/Contact/Contact'));

// Services Components
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
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 8000);
	// }, []);

	return (
		<Fragment>
			<Switch>
				<Route exact path='/' component={Home} />

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
