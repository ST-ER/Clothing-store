import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import h from './Header.module.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Header = () => {
    return (
			<header className={h.header}>
				<div className={h.container}>
					<HeaderTitle />
					<HeaderContent />
				</div>
			</header>
		)
};

export default Header;