import React from 'react';
import s from '../../Pages/Home/Home.module.css'


const Questions = () => {
    return (
			<section className={s.questions}>
				<div className={s.container}>
					<div className={s.questions__title}>
						<div>Часто задаваемые вопросы</div>
						<label>FAQ</label>
					</div>
					<div className={s.questions__body}>
						{/* <select name="1" id="1">
							<option value="">2</option>
						</select> */}
					</div>
				</div>
			</section>
		)
};

export default Questions;