import React from 'react';
import classes from './BarUp.module.css';

import upgif from '../../../assets/upgif.gif';

const BarUp = props => {
	return (
		<div className={classes.BarUp}>
			<img className='img-fluid' src={upgif} alt='visionalization' />
		</div>
	);
};

export default BarUp;
