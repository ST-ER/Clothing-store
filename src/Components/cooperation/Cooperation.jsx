import React from 'react';
import s from '../../Pages/Home/Home.module.css'


const Cooperation = () => {
    return (
			<div className={s.cooperation}>
				<div className={s.container}>
					<div className={s.container__title}>Сотрудничество с нами</div>
					<div className={s.container__body}>
						<p className={s.p}>
							Наша компания постоянно растёт и расширяет рынок, поэтому мы
							заинтересованы в новых партнёрах и рассматриваем новые проекты,
							которые могут быть привлекательны и интересны с коммерческой точки
							зрения.
						</p>
						<div className={s.q}>
							<div className={s.qi}>Становитесь партнёром</div>
							<div className={s.qi}>Рекламируйте товары</div>
							<div className={s.qi}>Приводите покупателей</div>
							<div className={s.qi}>Получайте бонусы</div>
						</div>
						<div className={s.w}>
							<div className={s.wi}>
								Регистрируйтесь и переходите в свой кабинет
							</div>
							<div className={s.wi}>
								Рекламируйте наши товары на форумах, сайтах, в социальных сетях
							</div>
							<div className={s.wi}>
								Приводите покупателей на наш сайт по уникальной ссылке
							</div>
							<div className={s.wi}>
								Копите бонусы от каждого оплаченного заказа
							</div>
						</div>
						<p className={s.pp}>Это выгодно. Какие преимущества?</p>
						<div className={s.e}>
							<div className={s.ei}></div>
							<div className={s.ei}></div>
							<div className={s.ei}></div>
							<div className={s.ei}></div>
						</div>
						<div className={s.r}>
							<div className={s.ri}>Автоматизация процессов</div>
							<div className={s.ri}>Пополнение ассортимента</div>
							<div className={s.ri}>Поддержка и обучение</div>
							<div className={s.ri}>Бонусы за новых клиентов</div>
						</div>
					</div>
				</div>
			</div>
		)
};

export default Cooperation;