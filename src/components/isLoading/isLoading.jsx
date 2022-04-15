import React from 'react';
import preLoader from '../../images/preloader.gif';
import './isLoading.css';

const Isloading = () => {
	return (
		<div className='loading-wrapper'>
			<img className='loading' src={preLoader} alt="loading" />
		</div>
	);
}

export default Isloading;
