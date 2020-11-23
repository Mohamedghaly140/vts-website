import React from 'react';
// import Image from 'react-bootstrap/Image';
// import loading from '../../assets/Loading.png';
import Typical from 'react-typical';

import './PreLoaderPage.css';

const PreLoaderPage = () => {
	return (
		<section className='container-fluid vh-100 d-flex flex-column justify-content-center align-items-center pre__loader'>
			<div
				className='mb-2 text-center px-2 pb-2'
				style={{ color: 'var(--color1)', fontSize: '1.4rem' }}
			>
				<Typical
					steps={[
						'Visionalization Technology Solution',
						10,
						'The technological platform for business evolution is launched.',
						5,
					]}
					loop={Infinity}
					wrapper='p'
				/>
			</div>
			<div class='polyhedron tetrahedron'>
				<div class='side triangle'></div>
				<div class='side triangle'></div>
				<div class='side triangle'></div>
				<div class='side triangle'></div>
			</div>
		</section>
	);
};

export default PreLoaderPage;
