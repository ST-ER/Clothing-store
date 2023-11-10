import React from 'react';
import r from '../reviews/reviews.module.css'


const item = ({item}) => {
    return (
			<div className={r.reviews__body__item} key={item.id}>
				<img src={item.img} alt={item.author} className={r.img} />
				<div>
					<div>{item.text}</div>
					<div className={r.nameDate}>
						<div>{item.author}</div>
						<div>{item.date}</div>
					</div>
				</div>
			</div>
		)
};

export default item;