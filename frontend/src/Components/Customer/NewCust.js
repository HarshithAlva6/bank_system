import React, {useState} from 'react';
import axios from 'axios';
import '../Payment/SendPay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
//const {MongoClient} = require('mongodb');

 const NewCust = (props) => {
     const history = useHistory();
     const [text, setText] = useState('');
     const [input, setInput] = useState({
        name: '',
        email: '',
        curBal: '',
        num: '',
        pWord: ''
     })
     function changeHandler(event) {
         const {name,value} = event.target;
         setInput(prevInput => {
             return {
                 ...prevInput,
                 [name]: value
             }
         })
     };
     function inputSubmit(event){
         event.preventDefault();
         var ok = false;
         if(input.name === '') {
            setText("Please enter a Valid Name");
         }
         else if(input.num.length !== 10 || input.num.length === 0) {
            setText("Please enter 10 digit number");
         } 
         else if(input.curBal.length === 0) {
             setText("Please enter correct Balance value");
         } 
         else if(input.pWord === '') {
             setText("Please enter Valid Password");
         } 
         else {
             ok = true;
             setText("CUSTOMER ADDED SUCCESSFULLY!");
         }
         const newCust = {
             name: input.name,
             email: input.email,
             curBal: input.curBal,
             num: input.num,
             pWord: input.pWord
         }
         ok && axios.post('http://localhost:3000/customer', newCust);
         ok && setInput({
             name: '',
             email: '',
             curBal: '',
             num: '',
             pWord: ''
         })
     }
     function goBack(){
        history.push('/');
     }
     return(
         <div className = "container justify-content-center">
            <div className = "card">
            <form>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "name" placeholder = "Enter Name" type = "text" value = {input.name}></input>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "email" placeholder = "Enter the E-Mail" type = "email" value = {input.email}></input>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "curBal" placeholder = "Current Balance?" type = "number" value = {input.curBal}></input>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "num" placeholder = "Phone Number" type = "number" value = {input.num}></input>
                </div>
                <div className = "inputs">
                    <input onChange = {changeHandler} name = "pWord" placeholder = "Enter your UPI Password" type = "text" value = {input.pWord}></input>
                </div>
                <div className = "but1">
                    <button className = "back" onClick = {goBack}>Go Back</button>
                    <button type = "button" className = "btn btn-primary back" onClick = {inputSubmit}>Submit</button>
                </div>
                <p>{text}</p>
            </form>
            </div>
         </div>
         
     )
 }
 export default NewCust;
