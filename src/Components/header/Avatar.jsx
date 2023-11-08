import React from 'react';
import h from './Header.module.css'
import { useNavigate } from 'react-router-dom'


const Avatar = ({ isAvatar, AvatarClick }) => {
	const navigate = useNavigate()
	return (
		<>
			<img
				src='../img/avatar.svg'
				alt='avatar'
				className={h.avatar}
				onClick={AvatarClick}
			/>
			{isAvatar && <div className={h.isAvatar}>
				<div></div>
				<button onClick={() => {navigate('/auth')}}>Войти</button>
			</div>}
		</>
	)
}

export default Avatar;