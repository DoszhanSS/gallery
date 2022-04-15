import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/header';
import Photos from '../photos/photos';
import { axiosInstans } from '../../API/api'
import './home.css'
import { getImagesAC } from '../../redux/reducers/home-reduicer';
import '../search-blcok/search-block.css'
import Isloading from '../isLoading/isLoading';
import { isLoadingFalseAC, isLoadingTrueAC } from '../../redux/reducers/some-think-reducer';
import Pagination from '../pagination/pagination';

const Home = () => {

	const dispatch = useDispatch();

	let images = useSelector((state) => state.home.images);
	const isLoad = useSelector((state) => state.someThink.isLoading);


	const setImages = (images) => dispatch(getImagesAC(images));


	const [inptPatam, setInputParam] = useState('');
	const [btn, setBtn] = useState('');


	const ref = useRef();

	const search = () => {
		setBtn(ref.current.value)
	}


	useEffect(() => {
		if (inptPatam === '') {
			dispatch(isLoadingTrueAC())
			axiosInstans.get(`/photos/random?count=9&client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI`)
				.then(res => {
					setImages(res.data);
					dispatch(isLoadingFalseAC())
				})
		} else {
			dispatch(isLoadingTrueAC())
			axiosInstans.get(`/search/photos?query=${inptPatam}&count=9&d=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI&page=1`)
				.then(res => {
					setImages(res.data.results);
					setBtn(ref.current.value)
					dispatch(isLoadingFalseAC())
					console.log(res);
				})
		}
	}, [btn]);

	return (
		<div className='home'>
			<Header />
			<div className='search-block'>
				<div className="search-block__inpt">
					<input ref={ref} type="text" onInput={() => setInputParam(ref.current.value)} value={inptPatam} className='search-block-input' placeholder='ПОИСК' />
					<button onClick={search} className='search-btn'></button>
				</div>
			</div>
			{isLoad ? <Isloading /> : <Photos images={images} />}
		</div>
	);
}


export default React.memo(Home);