import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Recent = (props) => {
    const {name,img}=props.poeple;
    return (
        <div className="all-data">
            <img src={img} alt=""/>
            <h5>{name}</h5>
            <span><FontAwesomeIcon icon={faHeart} /></span>
        </div>
    );
};

export default Recent;