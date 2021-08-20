import React,{useEffect, useState} from 'react';
import TransCard from './TransCard';
import './TransCard.css';

 const Transaction = () => {
    const [payments, setPayments] = useState([{
        name: '',
        number: '',
        recName: '',
        recNum: '',
        amount: '',
        desc: '',
        status: ''
    }])
    useEffect(() => {
        fetch("/create/payments").then(res => {
            if(res.ok) {
                console.log(res);
                return res.json()
            }
        }).then(jsonRes => setPayments(jsonRes));
    },[]);
     return(
         <div className = "clone">
            {payments.length === 0? <p className = "head1">NO TRANSACTIONS DONE!</p>:
            payments.map(payment => 
                <>
                <TransCard trans = {payment}/>
                </>)}
         </div>
     )
 }
 export default Transaction;