import React, { useState } from 'react';
import h from './Header.module.css'
import BurgerMenu from './BurgerMenu';
import Search from './Search';
import Avatar from './Avatar';
import Heart from './Heart';
import ShoppingBag from './ShoppingBag';

const HeaderTitle = ({ isOpen, setIsOpen, isAvatar, setIsAvatar }) => {
	const BurgerClick = () => {
		setIsOpen(!isOpen)
	}
	const AvatarClick = () => {
		setIsAvatar(!isAvatar)
	}
	return (
		<div className={h.header__title}>
			<BurgerMenu BurgerClick={BurgerClick} isOpen={isOpen} />
			<div>
				<Search />
				<Avatar isAvatar={isAvatar} AvatarClick={AvatarClick} />
				<Heart />
				<ShoppingBag />
			</div>
		</div>
	)
}

export default HeaderTitle;