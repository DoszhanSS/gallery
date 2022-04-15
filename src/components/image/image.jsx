import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import heart from '../../images/heartblck.svg';
import './image.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentImgAC } from '../../redux/reducers/image-reduicer';
import whiteHeaert from '../../images/heart.svg'
import { axiosInstans } from '../../API/api'
import Isloading from '../isLoading/isLoading';
import { isLoadingFalseAC, isLoadingTrueAC } from '../../redux/reducers/some-think-reducer';
import { setImagesFavoritesAC } from '../../redux/reducers/favorites-reducer';

const Image = (props) => {


	const image = useSelector(state => state.image.currentImg);
	const [likeByUser, setLikeByUser] = useState(image.liked_by_user);
	const isLoad = useSelector(state => state.someThink.isLoading);


	const dispatch = useDispatch();

	const setLikeApi = () => {
		if (likeByUser === false) {
			dispatch(isLoadingTrueAC())
			axiosInstans.post(`/photos/${image.id}/like?client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI`)
				.then(res => {
					if (res.status == 201) {
						dispatch(isLoadingFalseAC())
						setLikeByUser(true);
					}
				})
			dispatch(isLoadingTrueAC())
			axiosInstans.get('https://api.unsplash.com/users/alljsayonarara/likes').then(
				res => {
					dispatch(setImagesFavoritesAC(res.data))
					dispatch(isLoadingFalseAC())
				}
			)
		} else {
			dispatch(isLoadingTrueAC())
			axiosInstans.delete(`/photos/${image.id}/like?client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI`)
				.then(res => {
					if (res.status == 200) {
						dispatch(isLoadingFalseAC())
						setLikeByUser(false);
					}
				})
		}

	}
	useEffect(() => {
		dispatch(isLoadingTrueAC())
		axiosInstans.get(`/photos/${image.id}?client_id=SWzrA9ZiPwBP1Rs24YSAQPVVGbKrnSzykSY-NlO_AOI`)
			.then(res => {
				dispatch(getCurrentImgAC(res.data));
				dispatch(isLoadingFalseAC());
			})
	}, [likeByUser]);



	return (
		<div>
			<Header />
			{isLoad ? <Isloading />
				: <div className='image-block'>
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
									onClick={setLikeApi}
									style={likeByUser ? { background: 'red' }
										: { background: 'white' }}
									className="donwload-image-block__like">
									<img src={likeByUser ? whiteHeaert : heart} alt="like" />
								</div>
								<div className="donwload-image-block__down"></div>
								<a href={image.links.download} className="donwload-image-block-btn">
									<div className='donwload-image-block-div'>
										Downloand
									</div>
								</a>
							</div>
						</div>
						<div className="image-block-img">
							<img className='image-block-image' src={image.urls.raw} alt="image" />
						</div>
					</div>
				</div>
			}
		</div >
	);
}

export default React.memo(Image);
