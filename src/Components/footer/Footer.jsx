import React from 'react';
import s from './Footer.module.css'


const Footer = () => {
    return (
			<footer className={s.footer}>
				<div className={s.info}>
					<h3 className={s.h3}>Информация</h3>
					<ul className={s.ul}>
						<li>Главная</li>
						<li>Акции</li>
						<li>Каталог</li>
						<li>Возврат</li>
						<li>Доставка</li>
						<li>Партнёрам</li>
						<li>Способы оплаты</li>
						<li>Как сделать заказ?</li>
					</ul>
				</div>

				<div className={s.contact}>
					<h3 className={s.h3}>Мой кабинет</h3>
					<ul className={s.ul}>
						<li>Мои заказы</li>
						<li>Мои адреса</li>
						<li>Мои скидки</li>
						<li>Моя информация</li>
					</ul>
				</div>

				<div className={s.myOffice}>
					<h3 className={s.h3}>Контактная информация</h3>
					<ul className={s.ul}>
						<label>
							ИП Вишневский Иван Сергеевич государственная регистрация
							№690867884 от 31.07.2020. Логойским горисполкомом Защита прав
							потребителей +375259990755
						</label>
					</ul>
				</div>

				<div className={s.network}>
					<h3 className={s.h3}>Соц. сети</h3>
					<ul></ul>
				</div>
			</footer>
		)
};

export default Footer;