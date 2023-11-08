import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import a from '../advantages/advantages.module.css'

const Advantages = () => {
    return (
			<div className={a.advantages}>
				<div className={a.container}>
					<div className={a.advantages__title}>Почему выбирают нас?</div>

					<div className={a.advantages__body}>
						<img src='../img/Ellipse 4.svg' alt='E4' className={a.E4} />
						<img src='../img/Ellipse 6.svg' alt='E4' className={a.E6} />
						<img src='../img/Ellipse 4.svg' alt='E4' className={a.E41} />
						<img src='../img/Ellipse 6.svg' alt='E4' className={a.E61} />
						<div className={a.body__line}>
							<div className={a.advantages__item}>
								Скидки постоянным клиентам от 5%
							</div>
							<div className={a.advantages__item}>
								Предлагаем самые выгодные цены
							</div>
							<div className={a.advantages__item}>
								Наши покупатели всегда остаются довольны
							</div>
							<div className={a.advantages__item}>
								Широкий ассортимент товаров для всей семьи
							</div>
						</div>

						<div className={a.body__line2}>
							<div className={a.advantages__item}>
								Возможность доставки в любой город Беларуси
							</div>
							<div className={a.advantages__item}>
								Пункты выдачи заказов рядом с домом
							</div>
						</div>
					</div>
				</div>
			</div>
		)
};

export default Advantages;