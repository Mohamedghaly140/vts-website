import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter basename='/vts-website'>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
