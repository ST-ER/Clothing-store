import React from 'react';
import md from './MoreDetails.module.css'

const MoreDetails = () => {
    return (
        <button className={md.btn}>
            <img src="../img/button/podrob.svg" alt="подробнее" />
        </button>
    );
};

export default MoreDetails;