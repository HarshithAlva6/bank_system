import React, {useEffect, useState} from 'react';
import CustCard from './CustCard';
import SendPay from '../Payment/SendPay';
import './CustCard.css';
 const AllCust = () => {
     const [cust, setCust] = useState([{
        _id: '',
        name: '',
        email: '',
        curBal: '',
        num: '',
        pWord: ''
     }])
     const [pay,setPay] = useState({
         userId: '',
         userName: '',
         userNum: '',
         userBal: '',
         userPword: ''
     })
     const [disp,setDisp] = useState(true);

     useEffect(() => {
         fetch("/customer/AllCust").then(res => {
             if(res.ok) {
                 return res.json()
             }
         }).then(jsonRes => setCust(jsonRes));
     },[]);

     const runNew = (id) => {
        setDisp(false);
        var find = cust.find(x => x._id === id);
           setPay({
               userId: find._id,
               userName: find.name,
               userNum: find.num,
               userBal: find.curBal,
               userPword: find.pWord
           })
    }
    const fullList = cust.map(eachCust => <>
        <CustCard card = {eachCust} sendNew = {runNew}/>
        </>);

     return(
         <div>
            {disp ? <p className = "heading">SELECT PAYER</p>:<p className = "heading">TRANSACTION</p>}
            {disp ? fullList:<SendPay payInfo = {pay}/>}
         </div>
     )
 }
 export default AllCust;