import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import p from '../promotion/promotion.module.css'


const Promotion = () => {
    return (
			<div className={p.promotion}>
				<div className={p.promotion__title}>
					<label>Успей купить!</label>
					<div>Акции</div>
				</div>

				<div className={p.promotion__body}>
					<div className={p.card}></div>
					<div className={p.card}></div>
					<div className={p.card}></div>
				</div>
			</div>
		)
};

export default Promotion;