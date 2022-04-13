import React from 'react';
import logo from '../../images/logo.svg'
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className="container header-container">
					<div className="header__logo">
						<img src={logo} alt='logo' className="logo-header" />
					</div>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<Link className="header__home" to='/'>поиск</Link>
						</li>
						<li className='header__nav-item'>
							<Link className="header__nav" to='/favorites'>Избранное</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}

export default Header;
