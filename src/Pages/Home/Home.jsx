import React from 'react';
import s from './Home.module.css'

const Home = () => {
    return (
			<div>
				<header className={s.header}>
					<div className={s.container}>
						<div className={s.header__title}>
							<img src='../img/burger.svg' alt='burger' className={s.burger} />
							<div>
								<img
									src='../img/search.svg'
									alt='search'
									className={s.search__icon}
								/>
								<input className={s.input__header} placeholder='Поиск' />
								<img src='../img/avatar.svg' alt='avatar' className={s.avatar} />
								<img src='../img/heart.svg' alt='heart' className={s.heart} />
								<img
									src='../img/shopping-bag.svg'
									alt='shopping-bag'
									className={s.shopping__bag}
								/>
							</div>
						</div>

						<div className={s.header__content}>
							<div className={s.test}>
								<img src='../img/Rectangle1.png' className={s.img1}></img>
								<img src='../img/Rectangle2.jpg' className={s.img2}></img>
								<div className={s.welcome}>
									Добро пожаловать в <span>Cocteil</span>
								</div>
							</div>
							<div className={s.moot}>
								Экономим Ваше время! Предлагаем лучшие цены! Доставляем в
								кратчайшие сроки!
							</div>
							<div className={s.catalog}></div>
						</div>
					</div>
				</header>
				<div className={s.advantages}>
					<div className={s.container}>
						<div className={s.advantages__title}>Почему выбирают нас?</div>

						<div className={s.advantages__body}>
							<div className={s.body__line}>
								<div className={s.advantages__item}>
									Скидки постоянным клиентам от 5%
								</div>
								<div className={s.advantages__item}>
									Предлагаем самые выгодные цены
								</div>
								<div className={s.advantages__item}>
									Наши покупатели всегда остаются довольны
								</div>
								<div className={s.advantages__item}>
									Широкий ассортимент товаров для всей семьи
								</div>
							</div>

							<div className={s.body__line2}>
								<div className={s.advantages__item}>
									Возможность доставки в любой город Беларуси
								</div>
								<div className={s.advantages__item}>
									Пункты выдачи заказов рядом с домом
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.promotion}>
					<div className={s.promotion__title}>
						<label>Успей купить!</label>
						<div>Акции</div>
					</div>

					<div className={s.promotion__body}>
						<div className={s.card}></div>
						<div className={s.card}></div>
						<div className={s.card}></div>
					</div>
				</div>
				<div className={s.reviews}>
					<div className={s.container}>
						<div className={s.reviews__title}>Отзывы наших покупателей</div>
						<div className={s.reviews__body}>
							<div className={s.tutu}>
								<div className={s.reviews__body__item}>
									Платье село отлично! Хороший материал. Буду заказывать еще,
									осталась очень довольна.
								</div>
								<div className={s.reviews__body__item}>
									Заказываю постоянно одежду в этом магазине! Хорошие цены,
									хорошее качество! Приятные менеджеры! Все быстро, доступно,
									удобно! Спасибо.
								</div>
							</div>
							<button>Добавить отзыв</button>
							<img src='./img/btn_scrol2.svg' alt='scrol2' className={s.scrol2} />
						</div>
					</div>
				</div>

				<div className={s.questions}>
					<div className={s.container}>
						<div className={s.questions__title}>
							<div>Часто задаваемые вопросы</div>
							<label>FAQ</label>
						</div>
						<div className={s.questions__body}></div>
					</div>
				</div>
				<div className={s.cooperation}>
					<div className={s.container}>
						<div className={s.container__title}>Сотрудничество с нами</div>
						<div className={s.container__body}>
							<p className={s.p}>
								Наша компания постоянно растёт и расширяет рынок, поэтому мы
								заинтересованы в новых партнёрах и рассматриваем новые проекты,
								которые могут быть привлекательны и интересны с коммерческой
								точки зрения.
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
									Рекламируйте наши товары на форумах, сайтах, в социальных
									сетях
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
				<div className={s.suppliers}></div>
				<footer className={s.footer}></footer>
			</div>
		)
};

export default Home;