import React from 'react';
import h from './Header.module.css'


const Avatar = ({ isAvatar, AvatarClick }) => {
	return (
		<>
			<img
				src='../img/avatar.svg'
				alt='avatar'
				className={h.avatar}
				onClick={AvatarClick}
			/>
			{isAvatar && <div className={h.isAvatar}></div>}
		</>
	)
}

export default Avatar;