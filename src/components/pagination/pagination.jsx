import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageAC } from '../../redux/reducers/home-reduicer';
import './pagination.css';

const Pagination = (props) => {

	let counts = [];
	let currentPage = useSelector((state) => state.home.currentPage);
	const dispatch = useDispatch();


	for (let i = 1; i < props.count; i++) {
		counts.push(i);
	}

	let renderCount = counts.map(item => {
		return <div
			onClick={() => { dispatch(setCurrentPageAC(item)) }}
			className={item === currentPage ? 'countPag currentPage' : 'countPag'}
		> {item}</div>
	})

	return (
		<div>
			<span className='countPag'> Prev </span>	{renderCount} <span className='countPag'> Next </span>
		</div>
	);
}

export default Pagination;
