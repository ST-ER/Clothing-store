import React from 'react';
import s from './Suppliers.module.css'

const Suppliers = () => {
    return (
			<section className={s.suppliers}>
				<form>
					<h1>
						Приглашаем к сотрудничеству производителей и поставщиков одежды,
						обуви и аксессуаров
					</h1>
					<input type='text' placeholder='Ваше имя' />
					<input type='tel' placeholder='Номер телефона' />
					<input type='email' placeholder='Электронная почта' />
					<label>
						<input type='checkbox'/>
						Даю согласие на обработку персональных данных
					</label>
				</form>
			</section>
		)
};

export default Suppliers;