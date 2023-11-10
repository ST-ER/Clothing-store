import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import h from './Header.module.css'


const BurgerMenu = ({ BurgerClick, isOpen }) => {
	return (
		<>
			<img
				src='../img/icon/burger.svg'
				alt='burger'
				className={h.burger}
				onClick={BurgerClick}
			/>
			{isOpen && (
				<div className={h.isBurger}>
					<img src='../img/logo.svg' alt='logo' />
					<ul className={h.ul}>
						<li className={h.li}>
							<NavLink className={h.nl} to='/women'>
								Женщинам
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/men'>
								Мужчинам
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/children'>
								Детям
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/shoes'>
								Обувь
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/toys'>
								Игрушки
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/accessories'>
								Аксессуары
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/plus-size'>
								Большие размеры
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/extra'>
								Дополнительно
							</NavLink>
						</li>
						<li className={h.li}>
							<NavLink className={h.nl} to='/sales'>
								Акции
							</NavLink>
						</li>
					</ul>

					{/* <ul className={h.ul}>
						<li className={h.li}>Женщинам</li>
						<li className={h.li}>Мужчинам</li>
						<li className={h.li}>Детям</li>
						<li className={h.li}>Обувь</li>
						<li className={h.li}>Игрушки</li>
						<li className={h.li}>Аксессуары</li>
						<li className={h.li}>Большие размеры</li>
						<li className={h.li}>Дополнительно</li>
						<li className={h.li}>Акции</li>
					</ul> */}
				</div>
			)}
		</>
	)
}

export default BurgerMenu;