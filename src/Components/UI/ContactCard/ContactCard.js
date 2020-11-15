import React, { Fragment } from 'react';
import classes from './ContactCard.module.css';

import bgContact from '../../../assets/botton contact.png';

const ContactCard = props => {
	return (
		<Fragment>
			<div className={classes.Main__Wrapper}>
				<img className='img-fluid' src={bgContact} alt='contact card' />
				<div className={classes.Card_Caption}>
					<div className={classes.Card_Image}>
						<img
							className='img-fluid'
							src={props.imageUrl}
							alt='speech-bubble'
						/>
					</div>
					<div className={classes.Card_Title}>
						<h5 className='mb-0'>{props.title}</h5>
					</div>
					<div className={classes.Card_Body}>
						<p className='mb-0'>
							{props.body1}
							<br />
							{props.body2}
						</p>
					</div>
					<div className={classes.Card_Action}>
						<p className='mb-0'>{props.action}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ContactCard;
