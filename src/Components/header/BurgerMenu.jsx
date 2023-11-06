import React, { useState } from 'react';
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
					<img src="../img/logo.svg" alt="logo" />
					<ul>
						<li>Женщинам</li>
						<li>Мужчинам</li>
						<li>Детям</li>
						<li>Обувь</li>
						<li>Игрушки</li>
						<li>Аксессуары</li>
						<li>Большие размеры</li>
						<li>Дополнительно</li>
						<li>Акции</li>
					</ul>
				</div>
			)}
		</>
	)
}

export default BurgerMenu;