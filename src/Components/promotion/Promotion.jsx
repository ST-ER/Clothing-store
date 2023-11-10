import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import p from '../promotion/promotion.module.css'
import MoreDetails from '../../UI/details/MoreDetails';
import Card from './Card';


const Promotion = () => {
	const bd = [
		{
			id: 0,
			img: './img/Promo/promo2.jpeg',
			price: '50.00',
			oldPrice: '65.00',
			description: 'Блузка женская классная',
			stars: 5,
		},
		{
			id: 1,
			img: './img/Promo/Promo1.jpeg',
			price: '40.00',
			oldPrice: '65.00',
			description: 'Блузка женская классная',
			stars: 5,
		},
		{
			id: 2,
			img: './img/Promo/promo2.jpeg',
			price: '30.00',
			oldPrice: '65.00',
			description: 'Блузка женская классная',
			stars: 5,
		},
		{
			id: 3,
			img: './img/Promo/Promo1.jpeg',
			price: '20.00',
			oldPrice: '65.00',
			description: 'Блузка женская классная',
			stars: 5,
		},
		{
			id: 4,
			img: './img/Promo/promo2.jpeg',
			price: '20.00',
			oldPrice: '65.00',
			description: 'Блузка женская классная',
			stars: 5,
		},
	]
	const card = bd.map(item => <Card item={item} kei={item.id} />)
    return (
			<section className={p.promotion}>
				<div className={p.promotion__title}>
					<label>Успей купить!</label>
					<div>Акции</div>
				</div>

				<div className={p.promotion__body}>
					{card}
				</div>
			</section>
		)
};

export default Promotion;