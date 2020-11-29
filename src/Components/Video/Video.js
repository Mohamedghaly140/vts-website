import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// import videoDigital from '../../assets/video/Digital Revolution with Digital Technology.mp4';
import videoDigital from '../../assets/video/company promotion.m4v';

const Video = props => {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title
					id='contained-modal-title-vcenter'
					style={{ color: 'var(--color5)' }}
				>
					Digital Revolution with Digital Technology
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<video
					width='100%'
					src={videoDigital}
					muted
					autoPlay
					controls
				></video>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Video;
