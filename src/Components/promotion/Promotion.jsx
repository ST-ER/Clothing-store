import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import p from '../promotion/promotion.module.css'


const Promotion = () => {
	const bd = {
		img: './img/Promo/Promo1.jpeg',
		price: '50.00',
		oldPrice: '65.00',
		description: 'Блузка женская классная',
	}
    return (
			<div className={p.promotion}>
				<div className={p.promotion__title}>
					<label>Успей купить!</label>
					<div>Акции</div>
				</div>

				<div className={p.promotion__body}>
					<div className={p.card}>
						<img className={p.promoImg} src={bd.img} alt='promo' />
						<div>{bd.price} p</div>
						<div>{bd.oldPrice} p</div>
						<p>{bd.description}</p>
						
					</div>
				</div>
			</div>
		)
};

export default Promotion;