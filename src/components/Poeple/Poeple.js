import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faPlus } from '@fortawesome/free-solid-svg-icons'
import './Poeple.css'

const Poeple = (props) => {
    const {name,img,salary,email}=props.poeple;
    return (
        <div className="all-data">
            
            <img src={img} alt=""/>
            <h5>Name : {name}</h5>
            <p>Anual Salary : {salary}</p>
            <p>Email Address : {email}</p>
            <button className ="btn btn-success"  onClick={()=>props.handleAddFriend(props.poeple)}><FontAwesomeIcon icon={faPlus} />Add Friend</button>
        </div>
    );
};

export default Poeple;