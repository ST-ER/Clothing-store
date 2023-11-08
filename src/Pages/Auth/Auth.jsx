import React, { useState } from 'react'
import a from './Auth.module.css'
import { NavLink } from 'react-router-dom'
const Authorization = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		console.log('Отправлено:', email, password)
	}

	return (
		<form className={a.formAuth} onSubmit={handleSubmit}>
			<header className={a.head}>Вход в личный кабинет</header>
			<input
				className={a.email}
				type='email'
				value={email}
				onChange={event => setEmail(event.target.value)}
				placeholder='Электронная почта'
			/>
			<input
				className={a.password}
				type='password'
				value={password}
				onChange={event => setPassword(event.target.value)}
				placeholder='Пароль'
			/>
			<NavLink to='/' className={a.btn1}>Не помню пароль</NavLink>
			<div className={a.divBtn}>
				<button className={a.btn2} type='submit'>
					Войти в кабинет
				</button>
				<button className={a.btn3}>Регистрация</button>
			</div>
		</form>
	)
}

export default Authorization
