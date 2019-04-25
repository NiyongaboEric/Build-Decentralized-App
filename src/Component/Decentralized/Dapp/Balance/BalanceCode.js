
import React, { Component } from 'react';

import BalanceMarkup from './BalanceMarkup'

import Web3 from 'web3';

var Ethereum_Client = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var OneAgentAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
var OneAgentAddress = '0xfea18cbb2852a8c94926870df20719c6bf18ab09'
var OneAgentBoth = Ethereum_Client.eth.contract(OneAgentAbi).at(OneAgentAddress)



class BalanceCode extends Component {
	constructor(props){
		super(props);
		this.state = {
			globAddr:[{id: 1, address: ''}, {id: 2, coinbase: ''}, {id: 3, balance: 0}, {id: 4, token: ''}],
			amountAddress: [{id: 1, addressCopy: ''}, {id: 2, coinbaseCopy: ''}, {id: 3, balanceCopy: 0}, {id: 2, tokenCopy: ''}],
			enteredAddressvalue: 0,
			
		}
		this.enteredValue = this.enteredValue.bind(this);
		this.checkAddressValue = this.checkAddressValue.bind(this);
		this.moneyInformationCopied = this.moneyInformationCopied.bind(this);
	}

	enteredValue(event) {
		this.setState({enteredAddressvalue: event.target.value})
	}

	
	checkAddressValue(){
		
		let numberIsEntered = this.state.enteredAddressvalue
		let convertAddress = numberIsEntered

		const users = Object.assign({}, this.state.globAddr)
			users.address = convertAddress
			
			if (!Ethereum_Client.isAddress(convertAddress)){
				alert('Invalid User Address')
				
				return
			}			

			console.log('user is' + convertAddress)
			console.log('user type is ' + typeof(convertAddress))

			users.coinbase = Ethereum_Client.eth.coinbase
			Ethereum_Client.eth.getBalance(convertAddress, (err, balanceHolder) =>{
				if(!err) {
					users.balance = Ethereum_Client.fromWei(balanceHolder, 'ether').toNumber()
				}
				console.log(err)
			})
			
			OneAgentBoth.balanceOf(convertAddress, (err, tokenHolder) =>{
				if (!err) {
					users.token = Ethereum_Client.fromWei(tokenHolder, 'ether').toNumber()
				}
				console.log(err)
			})			

			this.setState({globAddr: users})
			
	}
 
		moneyInformationCopied =()=>{
			const copyInfo = Object.assign({}, this.state.amountAddress)
			copyInfo.addressCopy  = this.state.globAddr.address
			copyInfo.coinbaseCopy = this.state.globAddr.coinbase
			copyInfo.balanceCopy  = this.state.globAddr.balance
			copyInfo.tokenCopy	  = this.state.globAddr.token

			this.setState({amountAddress: copyInfo})
		}

  render() {
    return (
      <div className="Declare">
			<BalanceMarkup  
					testInput={this.enteredValue} 
			 		displayInput ={this.checkAddressValue}
					moneyInformation = {this.moneyInformationCopied}
					 
					address={this.state.amountAddress.addressCopy}
					coinbase={this.state.amountAddress.coinbaseCopy}
					balance={this.state.amountAddress.balanceCopy}
					token={this.state.amountAddress.tokenCopy}
					></BalanceMarkup>
		</div>
    );
  }
}

export default BalanceCode;