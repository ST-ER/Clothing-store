import React from 'react';
import h from './Header.module.css'


const ShoppingBag = () => {
    return (
			<>
				<img
					src='../img/icon/shoppingBag.svg'
					alt='shopping-bag'
					className={h.shopping__bag}
				/>
			</>
		)
};

export default ShoppingBag;