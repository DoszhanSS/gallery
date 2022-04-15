import React, { useState } from 'react';
import logo from '../../images/logo.svg'
import './header.css';
import { Link } from "react-router-dom";



const Header = () => {

	const [menustate, setMenustatw] = useState(false);



	return (
		<>
			<header className='header'>
				<div className="container header-container">
					<div className="header__logo">
						<img src={logo} alt='logo' className="logo-header" />
					</div>
					<div
						className={menustate ? 'header-burger-active header-burger' : 'header-burger'}
						onClick={() => { menustate ? setMenustatw(false) : setMenustatw(true) }}
					>
						<span></span>
					</div>
					<ul className={menustate ? 'header__nav-list-active header__nav-list' : 'header__nav-list'}   >
						<li className='header__nav-item'>
							<Link className="header__home" to='/gallery'>поиск</Link>
						</li>
						<li className='header__nav-item'>
							<Link className="header__nav" to='/gallery/favorites'>Избранное</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}

export default Header;
