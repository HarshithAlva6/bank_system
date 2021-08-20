import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import SendTrans from '../Payment/SendTrans';
import CustCard from './CustCard';
import axios from 'axios';

 const AllReceive = () => {
    const location = useLocation();
    const [cust, setCust] = useState([{
        _id: '',
        name: '',
        email: '',
        curBal: '',
        num: '',
        pWord: ''
     }])
    const [disp,setDisp] = useState(true);
    const [fupi, setUpi] = useState({});
    useEffect(() => {
        fetch("/customer/AllCust").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCust(jsonRes));
    },[]);

    const runNew = (id) => {
        setDisp(false);
        var rec = cust.find(x => x._id === id);
        const newUPI = {
            name: location.state.detail.name,
            number: location.state.detail.number,
            recName: rec.name,
            recNum: rec.num,
            amount: location.state.detail.amount,
            desc: location.state.detail.desc,
            status: location.state.detail.status
        }
        axios.post('http://localhost:3000/create', newUPI);
        setUpi(newUPI);
    }
    
    const fullList = cust.filter(eachCust => eachCust._id !== location.state.key).map(finCust => <div>
        <CustCard card = {finCust} sendNew = {runNew}/>
        </div>);
    return(
        <>
            {disp ? <p className = "heading">SELECT PAYEE</p>:<p className = "heading">Transaction Details</p>}
            {disp ? fullList:<SendTrans upi = {fupi}/>}
        </>
    )
}
export default AllReceive;