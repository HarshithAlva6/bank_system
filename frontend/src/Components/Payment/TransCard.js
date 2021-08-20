import React from 'react';
import './TransCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const TransCard = (props) => {
    return(
        <div className = "cl2">
            <div className = "cl3">
                <div>
                    <h3>{props.trans.name}</h3>
                    <p>{props.trans.number}</p>
                </div>
                <div>
                    <h3>Money Sent: &#8377;{props.trans.amount}</h3>
                    <p>({props.trans.desc})</p>
                </div>
            </div>
            <div className = "cl3">
                <div className = "cl4">
                    <h3>{props.trans.recName}</h3>
                    <p>{props.trans.recNum}</p>
                </div>
                <div className = "cl4">
                {props.trans.status?<FontAwesomeIcon icon = {faCheckCircle} size = "4x" color = "green"/>:
                                      <FontAwesomeIcon icon = {faTimesCircle} size = "4x" color = "red"/>}
                </div>
            </div>
        </div>
    )
}
export default TransCard;