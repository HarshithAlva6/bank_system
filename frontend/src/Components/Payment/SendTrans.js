import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import './SendTrans.css';

const SendTrans = (props) => {
    return(
        <div className = "payFirst">
            <div className = "paySecond">
                <div className = "payThird">
                    <h3>Money Sent: <FontAwesomeIcon icon = {faRupeeSign}/>{props.upi.amount}</h3>
                    <h4>{props.upi.desc}</h4>
                </div>
                <div className = "payFourth">
                    {props.upi.status?<FontAwesomeIcon icon = {faCheckCircle} size = "6x" color = "green"/>:
                                      <FontAwesomeIcon icon = {faTimesCircle} size = "6x" color = "red"/>}
                </div>
                <div className = "payThird">
                    <h3>From: {props.upi.name}</h3>
                    <h4>{props.upi.number}</h4>
                </div>
                <div className = "payFourth">
                    <h3>To: {props.upi.recName}</h3>
                    <h4>{props.upi.recNum}</h4>
                </div>    
            </div>
        </div>
    )
}
export default SendTrans;