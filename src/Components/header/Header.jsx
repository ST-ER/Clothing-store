import React, { useState } from 'react';
// import s from '../../Pages/Home/Home.module.css'
import h from './Header.module.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Header = () => {
	 const [isOpen, setIsOpen] = useState(false)
	 const [isAvatar, setIsAvatar] = useState(false)

    return (
			<header className={h.header}>
				<div className={h.container}>
					<HeaderTitle
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						isAvatar={isAvatar}
						setIsAvatar={setIsAvatar}
					/>
					<HeaderContent setIsOpen={setIsOpen} setIsAvatar={setIsAvatar} />
				</div>
			</header>
		)
};

export default Header;