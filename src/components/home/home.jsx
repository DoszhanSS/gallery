import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/header';
import Photos from '../photos/photos';
import axios from 'axios';
import './home.css'
import { getImagesAC } from '../../redux/reduicers/home-reduicer';
import '../search-blcok/search-block.css'

const Home = () => {

	let images = useSelector((state) => state.home.images);
	const dispatch = useDispatch();

	const setImages = (images) => dispatch(getImagesAC(images))


	const [inptPatam, setInputParam] = useState('');
	const [btn, setBtn] = useState('')
	const ref = useRef();
	const search = () => {
		setBtn(ref.current.value)
	}

	useEffect(() => {
		console.log('useEffect')
		if (inptPatam === '') {
			axios.get('https://api.unsplash.com/photos/random?count=9&client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI')
				.then(res => {
					setImages(res.data);
				})
		} else {
			console.log('else')
			axios.get(`https://api.unsplash.com/search/photos?query=${inptPatam}&count=9&client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI`)
				.then(res => {
					setImages(res.data.results);
					setBtn(ref.current.value)
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
			<Photos images={images} />
		</div>
	);
}


export default Home;
