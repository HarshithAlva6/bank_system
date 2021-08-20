import React from 'react';
import './CustCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const CustCard = (props) => {
    return(
        <div className = "first">
            <div className = "second">
                <h3>{props.card.name}</h3>
                <h4>{props.card.num}</h4>
            </div>
            <div className = "second">
                <h3>Balance:  <FontAwesomeIcon icon = {faRupeeSign}/>{props.card.curBal}</h3>
                <h4>{props.card.email}</h4>
            </div>
            <div className = "third">
                <button className = "btn btn-primary new" onClick = {() => {props.sendNew(props.card._id)}}>Select Account</button>
            </div>
        </div>
    )
}
export default CustCard;