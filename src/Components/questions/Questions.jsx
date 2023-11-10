import React, { useState } from 'react'
// import s from '../../Pages/Home/Home.module.css'
import s from './questions.module.css'

const Questions = () => {
	  const [activeQuestion, setActiveQuestion] = useState(null)

		const handleQuestionClick = questionId => {
			setActiveQuestion(activeQuestion === questionId ? null : questionId)
		}

		const questions = [
			{ id: 1, text: 'Как сделать заказ?', answer: 'Ответ на вопрос' },
			{ id: 2, text: 'Способы оплаты', answer: 'Ответ на вопрос' },
			{ id: 3, text: 'Доставка', answer: 'Ответ на вопрос' },
			{ id: 4, text: 'Сроки доставки', answer: 'Ответ на вопрос' },
			{ id: 5, text: 'Как сделать обмен?', answer: 'Ответ на вопрос' },
			{ id: 6, text: 'Как сделать возврат?', answer: 'Ответ на вопрос' },
			{
				id: 7,
				text: 'Куда и когда вернутся деньги за возвращённый товар?',
				answer: 'Ответ на вопрос',
			},

		]

	return (
		<section className={s.questions}>
			<div className={s.questions__title}>
				<div>Часто задаваемые вопросы</div>
				<label>FAQ</label>
			</div>

			<div className={s.questions__body}>
				{questions.map(question => (
					<div key={question.id}>
						<div
							className={s.text}
							onClick={() => handleQuestionClick(question.id)}
						>
							{question.text}
						</div>
						{activeQuestion === question.id && (
							<div className={s.answer}>{question.answer}</div>
						)}
						<hr className={s.hr}/>
					</div>
				))}
			</div>
		</section>
	)
}

export default Questions
