import './App.css';
import Home from './Components/Home'; 
import AllCust from './Components/Customer/AllCust';
import Transaction from './Components/Payment/Transaction';
import AllReceive from './Components/Customer/AllReceive';
import { Switch, Route } from 'react-router-dom';
import NewCust from './Components/Customer/NewCust';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className = "tab">
          <a className="navbar-brand" href="/">Home</a>
          <a className="navbar-brand" href="/transactions">Transactions</a>
          <a className="navbar-brand" href="/newCustomer">New User</a>
        </div>
        <span className="navbar-brand mb-0 h1">BANKING SYSTEM</span>
      </nav>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/customers" component = {AllCust}/>
        <Route path = "/transactions" component = {Transaction}/>
        <Route path = "/payments" component = {AllReceive}/>
        <Route path = "/newCustomer" component = {NewCust}/>
      </Switch>
    </div>
  );
}

export default App;
