import React from 'react';
import s from '../../Pages/Home/Home.module.css'


const Questions = () => {
    return (
			<div className={s.questions}>
				<div className={s.container}>
					<div className={s.questions__title}>
						<div>Часто задаваемые вопросы</div>
						<label>FAQ</label>
					</div>
					<div className={s.questions__body}></div>
				</div>
			</div>
		)
};

export default Questions;