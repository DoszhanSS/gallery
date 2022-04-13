import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentImgAC } from '../../redux/reduicers/image-reduicer';

const Photos = (props) => {

	const images = props.images;
	console.log(images);

	const dispatch = useDispatch();

	const onClickImgCurrent = (img) => {
		dispatch(getCurrentImgAC(img))
	};


	const imagesArray = images.map((item, index) => {
		return (<div key={index + item} className="home__flexitem">
			<Link onClick={() => { onClickImgCurrent(item) }} className="header__nav" to='/image'>
				<img src={item.urls.small} key={index} alt="item" />
			</Link>
		</div>
		)
	})

	return (
		<div className="home__flexbox">
			{imagesArray}

		</div>
	);
}

export default Photos;
