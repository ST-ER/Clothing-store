import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import h from './Header.module.css'



const HeaderContent = () => {
    return (
			<div className={h.header__content}>
				<div className={h.test}>
					<img src='../img/Rectangle1.png' className={h.img1}></img>
					<img src='../img/Rectangle2.jpg' className={h.img2}></img>
					<div className={h.welcome}>
						Добро пожаловать в <span>Cocteil</span>
					</div>
				</div>
				<div className={h.moot}>
					Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие
					сроки!
				</div>
				<div className={h.catalog}></div>
			</div>
		)
};

export default HeaderContent;