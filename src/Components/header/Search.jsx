import React from 'react';
import h from './Header.module.css'


const Search = () => {
    return (
			<>
				<img src='../img/icon/search.svg' alt='search' className={h.search__icon} />
				<input className={h.input__header} placeholder='Поиск' />
			</>
		)
};

export default Search;