import React from 'react';
import p from '../promotion/promotion.module.css'
import MoreDetails from '../../UI/details/MoreDetails'

const Card = ({item}) => {
    let stars = []
    for (let i = 0; i < item.stars; i++) {
			stars.push(<img src='./img/z.svg' alt='z' key={i} />)
		}


    return (
			<div className={p.card}>
				<img className={p.promoImg} src={item.img} alt='promo' />
				<div className={p.priceBlock}>
					<div className={p.price}>{item.price}p</div>
					<div className={p.oldPrice}>{item.oldPrice}p</div>
				</div>

				<p className={p.description}>{item.description}</p>
				<MoreDetails />
				<span className={p.stars}>{stars}</span>
			</div>
		)
};

export default Card;