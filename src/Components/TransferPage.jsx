import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Web3 from 'web3';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ContractInstance: this.props.contractInstance
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        // let amount = document.getElementById('amount').value;
        // let address = document.getElementById('address').value;
        // let goalValue = window.web3.toBigNumber(amount);

        // this.props.contractInstance.transfer(address, goalValue, {
        //     gas: 300000,
        //     from: window.web3.eth.accounts[0],
        // }, (err, result) => {
        //     if (!err) {
        //         alert(result)
        //     } else {
        //         alert(err)
        //     }
        // });
    }
  render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-field">
                    <p>Address:</p>
                    <input type="text" name="address" id="address" required/>
                </div>
                <div className="form-field">
                    <p>Amount:</p>
                    <input type="number" name="amount" id="amount" required/>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }
}
export default HomePage;
