import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import autorAva from '../../images/autor.jpg'
import heart from '../../images/heartblck.svg';
import './image.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCurrentImgAC } from '../../redux/reduicers/image-reduicer';
import whiteHeaert from '../../images/heart.svg'

const instans = axios.create({
	withCredentials: true,
	baseURL: 'https://api.unsplash.com/photos/',
	headers: {
		'Authorization': 'XJBxi4mamhrUAJSQ1zDYs9bVLMGnWS-wmUvzl1VG794'
	},
});


const Image = (props) => {

	const image = useSelector(state => state.image.currentImg);
	const [useClick, setUseClick] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get(`https://api.unsplash.com/photos/${image.id}?client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI`)
			.then(res => {
				dispatch(getCurrentImgAC(res.data))
			})
	}, [useClick]);



	return (
		<div>
			<Header />
			<div className='image-block'>
				<img src={image.urls.raw} alt="#" className="imageblockBG"></img>
				<div className="image-block-container">
					<div className="image-block__nav nav-image-block">
						<div className="nav-image-block__autor autor-nav-image">
							<div className="autor-nav-image__ava">
								<img src={image.user.profile_image.small} alt="ava" />
							</div>
							<div className="autor-nav-image__name">
								{image.user.name}
							</div>
							<div className="autor-nav-image__inst">
								{image.user.social.instagram_username}
							</div>
						</div>
						<div className="image-block__download donwload-image-block">
							<div
								onClick={() => {
									if (useClick) {
										setUseClick(false)
									} else {
										setUseClick(true)
									}
								}}
								style={useClick ? { background: 'red' }
									: { background: 'white' }}
								className="donwload-image-block__like">
								<img src={useClick ? whiteHeaert : heart} alt="like" />
							</div>
							<div className="donwload-image-block__down"></div>
							<button className="donwload-image-block-btn">
								<a href={image.links.download}>
									Downloand
								</a>
							</button>
						</div>
					</div>
					<div className="image-block-img">
						<img className='image-block-image' src={image.urls.raw} alt="image" />
					</div>
				</div>
			</div>
		</div >
	);
}

export default Image;
