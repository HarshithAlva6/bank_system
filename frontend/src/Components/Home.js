import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import payment from "../images/payment.svg";
import trans from "../images/transaction.svg";
import add from "../images/add.svg";
 const Home = () => {
     return(
         <div className = "home">
            <div className = "split">
                <div className = "buttons">
                    <img src = {payment} alt = "Payment"></img>
                    <Link to = "/customers"><button>MAKE PAYMENT</button></Link>
                </div>
                <div className = "buttons">
                    <img src = {trans} alt = "Transactions"></img>
                    <Link to = "/transactions"><button>ALL TRANSACTIONS</button></Link>
                </div>
                <div className = "buttons">
                    <img src = {add} alt = "Add Contact"></img>
                    <Link to = "/newCustomer"><button>ADD NEW CONTACT</button></Link>
                </div>
            </div>
         </div>
     )
 }
 export default Home;