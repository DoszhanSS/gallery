import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/header'
import Line from '../Line/line';
import Photos from '../photos/photos';
import './favorites.css'
import { axiosInstans } from '../../API/api'
import { setImagesFavoritesAC } from '../../redux/reducers/favorites-reducer';
import Isloading from '../isLoading/isLoading';
import { isLoadingFalseAC, isLoadingTrueAC } from '../../redux/reducers/some-think-reducer';

const Favorites = () => {


	const dispatch = useDispatch();

	const images = useSelector(state => state.favorites.images);
	const isLoad = useSelector(state => state.someThink.isLoading);


	useEffect(() => {
		dispatch(isLoadingTrueAC())
		axiosInstans.get('https://api.unsplash.com/users/alljsayonarara/likes').then(
			res => {
				dispatch(setImagesFavoritesAC(res.data))
				dispatch(isLoadingFalseAC())
			}
		)
	}, []);

	return (
		<div className='favorites'>
			<Header />
			<Line />
			<h2 className='favorites__title'>Избранное</h2>
			{isLoad ? <Isloading /> : <Photos images={images} />}
		</div>
	);
}

export default React.memo(Favorites);
