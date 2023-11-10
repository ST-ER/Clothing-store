import React from 'react';
import h from './Header.module.css'
import { useNavigate } from 'react-router-dom'


const Avatar = ({ isAvatar, AvatarClick }) => {
	const navigate = useNavigate()
	return (
		<>
			<img
				src='../img/icon/avatar.svg'
				alt='avatar'
				className={h.avatar}
				onClick={AvatarClick}
			/>
			{isAvatar && (
				<div className={h.isAvatar}>
					<div className={h.av}></div>
					<button
						onClick={() => {
							navigate('/auth')
						}}
					>
						Войти
					</button>
					<div>
						<div>Корзина</div>
					</div>

					<hr />
					<div>
						<div>Избранное</div>
					</div>
					<div>
						<div>Просмотренные</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Avatar;