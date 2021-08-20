import React, {useState} from 'react';
import "./SendPay.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

 const SendPay = (props) => {
     const history = useHistory();
     const [text, setText] = useState('');
     const [input, setInput] = useState({
        name: '',
        number: '',
        amount: '',
        desc: '',
        pWord: ''
     });
     function changeHandler(event) {
         const {name,value} = event.target;
         setInput(prevInput => {
             return {
                 ...prevInput,
                 [name]: value
             }
         })
     };
     function inputSubmit(props, event){
         event.preventDefault();
         var ok = false;
          if(input.pWord === props.payInfo.userPword){
            var fStatus = true;
         }
         else{
             fStatus = false;
         }
         if(Number(input.amount) > Number(props.payInfo.userBal)) {
             setText("Please enter a value less than current balance!");
         }
         else if(input.amount.length === 0){
             setText("Please enter the Amount");
         }
         else if(input.pWord.length === 0 ){
             setText("Please enter some password!");
         }
         else {
             ok = true;
         }
         var val = Number(props.payInfo.userBal) - Number(input.amount);
         const newUPI = {
             name: props.payInfo.userName,
             number: props.payInfo.userNum,
             balance: val,
             amount: input.amount,
             desc: input.desc,
             status: fStatus
         }
         ok && history.push({
             pathname: '/payments',
             state: {detail: newUPI, key: props.payInfo.userId}
         });
     }
     function goBack() {
         history.push('/customers');
     }
     return(
         <div className = "container justify-content-center">
            <div className = "card">
            <form>
                <div className = "inputs">
                    <label>{props.payInfo.userName}</label>
                </div>
                <div className = "inputs">
                    <label>Balance: <FontAwesomeIcon icon = {faRupeeSign}/>{props.payInfo.userBal}</label>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "amount" placeholder = "Enter Amount" type = "number" value = {input.amount}></input>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "desc" placeholder = "Reason for sending money?" type = "text" value = {input.desc}></input>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} placeholder = "Enter set UPI Password" name = "pWord" type = "password" value = {input.pWord}></input>
                </div>
                <div className = "but1">
                    <button className = "back" onClick = {goBack}>Go Back</button>
                    <button type = "button" className = "btn btn-primary back" onClick = {e => inputSubmit(props,e)}>Send</button>
                </div>
            </form>
            <p>{text}</p>
            </div>
         </div>    
     )
 }
 export default SendPay;
