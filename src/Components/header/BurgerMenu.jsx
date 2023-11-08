import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import h from './Header.module.css'


const BurgerMenu = ({ BurgerClick, isOpen }) => {
	return (
		<>
			<img
				src='../img/burger.svg'
				alt='burger'
				className={h.burger}
				onClick={BurgerClick}
			/>
			{isOpen && (
				<div className={h.isBurger}>
					<img src='../img/logo.svg' alt='logo' />
					<ul className={h.ul}>
						<li className={h.li}>Женщинам</li>
						<li className={h.li}>Мужчинам</li>
						<li className={h.li}>Детям</li>
						<li className={h.li}>Обувь</li>
						<li className={h.li}>Игрушки</li>
						<li className={h.li}>Аксессуары</li>
						<li className={h.li}>Большие размеры</li>
						<li className={h.li}>Дополнительно</li>
						<li className={h.li}>Акции</li>
					</ul>
				</div>
			)}
		</>
	)
}

export default BurgerMenu;