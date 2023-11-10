import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import r from '../reviews/reviews.module.css'
import Item from './Item'


const Reviews = () => {
	const bd = [
		{
			id: 1,
			img: './img/Reviews/Reviews1.svg',
			stars: 5,
			author: 'Анна Котлова',
			date: '23.05.2021',
			text: 'Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.',
		},
		{
			id: 2,
			img: './img/Reviews/Reviews2.svg',
			stars: 5,
			author: 'Анна Котлова',
			date: '23.05.2021',
			text: 'Заказываю постоянно одежду в этом магазине! Хорошие цены,хорошее качество! Приятные менеджеры! Все быстро, доступно,удобно! Спасибо.',
		},
	]
	const items = bd.map(item => <Item item={item}/>)
    return (
			<section className={r.reviews}>
				<div className={r.container}>
					<div className={r.reviews__title}>Отзывы наших покупателей</div>

					<div className={r.reviews__body}>
						<div className={r.reviewsBox}>
							{items}
						</div>
						<button>Добавить отзыв</button>
						<img
							src='./img/button/scrol.svg'
							alt='scrol'
							className={r.scrol2}
						/>
					</div>
				</div>
			</section>
		)
};

export default Reviews;