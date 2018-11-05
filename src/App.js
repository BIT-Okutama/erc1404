import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Header/NavBar';
import TransferPage from './Components/TransferPage';
import HomePage from './Components/HomePage';
// import Web3 from 'web3';
import contract from './Contract/contract.js';

class App extends Component {
  constructor(props) {
    super(props);
    // web3 initialization and setup
    // if (typeof window.web3 != 'undefined') {
    //   console.log("Using web3 detected from external source like MetaMask");
    //   window.web3 = new Web3(window.web3.currentProvider);
    // } else {
    //   window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    // }
    // const MyContract = window.web3.eth.contract(contract);
    // this.state = {
    //   ContractInstance: MyContract.at("0xf410b6c23fa2061e3ac777cd199dee76e7fe5105")
    // };
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="app-container">
            <Route name="home" exact path="/" component={HomePage}/>
            <Route name="transfer" exact path="/transfer" component={TransferPage}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
