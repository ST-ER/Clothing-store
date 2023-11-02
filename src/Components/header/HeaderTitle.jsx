import React, { useState } from 'react';
// import s from '../../Pages/Home/Home.module.css'
import h from './Header.module.css'




const HeaderTitle = () => {
    return (
			<div className={h.header__title}>
				<img
					src='../img/burger.svg'
					alt='burger'
					className={h.burger}
				/>

				
				<div>
					<img
						src='../img/search.svg'
						alt='search'
						className={h.search__icon}
					/>
					<input className={h.input__header} placeholder='Поиск' />
					<img src='../img/avatar.svg' alt='avatar' className={h.avatar} />
					<img src='../img/heart.svg' alt='heart' className={h.heart} />
					<img
						src='../img/shopping-bag.svg'
						alt='shopping-bag'
						className={h.shopping__bag}
					/>
				</div>
			</div>
		)
};

export default HeaderTitle;