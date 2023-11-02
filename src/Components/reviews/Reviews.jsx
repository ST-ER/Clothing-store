import React from 'react';
// import s from '../../Pages/Home/Home.module.css'
import r from '../reviews/reviews.module.css'


const Reviews = () => {
    return (
			<div className={r.reviews}>
				<div className={r.container}>
					<div className={r.reviews__title}>Отзывы наших покупателей</div>
					<div className={r.reviews__body}>
						<div className={r.tutu}>
							<div className={r.reviews__body__item}>
								Платье село отлично! Хороший материал. Буду заказывать еще,
								осталась очень довольна.
							</div>
							<div className={r.reviews__body__item}>
								Заказываю постоянно одежду в этом магазине! Хорошие цены,
								хорошее качество! Приятные менеджеры! Все быстро, доступно,
								удобно! Спасибо.
							</div>
						</div>
						<button>Добавить отзыв</button>
						<img src='./img/btn_scrol2.svg' alt='scrol2' className={r.scrol2} />
					</div>
				</div>
			</div>
		)
};

export default Reviews;