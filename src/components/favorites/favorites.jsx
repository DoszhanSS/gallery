import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/header'
import Line from '../Line/line';
import Photos from '../photos/photos';
import './favorites.css'

const Favorites = () => {

	const images = useSelector(state => state.home.images);

	return (
		<div className='favorites'>
			<Header />
			<Line />
			<h2 className='favorites__title'>Избранное</h2>
			<Photos images={images} />
		</div>
	);
}

export default Favorites;
