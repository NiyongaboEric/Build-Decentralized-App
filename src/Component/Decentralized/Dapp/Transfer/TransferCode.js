import React, { Component } from 'react';
import Web3 from 'web3';
import TransferMarkup from './TransferMarkup'

import _ from 'lodash';

var Ethereum_Client = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var OneAgentAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
var OneAgentAddress = '0xfea18cbb2852a8c94926870df20719c6bf18ab09'
var OneAgentBoth = Ethereum_Client.eth.contract(OneAgentAbi).at(OneAgentAddress)


class TransferCode extends Component {
	constructor(props){
		super(props);
		this.state = {
			storeInfo: [{id: 1, recipientAddress: ''}, {id: 2, amount: ''}, {id:3, HashTransaction:''}, {id: 4, sendAddress: ''}],
			senderAddress: '', recipientAddress: '', amountToSent: ''			 
		}
		this.acceptSenderAddress = this.acceptSenderAddress.bind(this)
		this.acceptRecipientAddress = this.acceptRecipientAddress.bind(this)
		this.acceptAmount = this.acceptAmount.bind(this)
		this.transferTokens = this.transferTokens.bind(this)
		this.cleanInfo = this.cleanInfo.bind(this)


	}
	acceptSenderAddress(event){
		this.setState({senderAddress: event.target.value});
		
	}
	acceptRecipientAddress(event){
		this.setState({recipientAddress: event.target.value});		
	}
	acceptAmount(event){
		this.setState({amountToSent: event.target.value})
	}

	transferTokens(){
		const user = Object.assign({}, this.state.storeInfo)
		//validate user address 
		let sendAddr = this.state.senderAddress
		if (!Ethereum_Client.isAddress(sendAddr)){
			alert('Invalid User Address')
			return
		}
		user.sendAddress = sendAddr


		//validate recipient address
		let recAddr = this.state.recipientAddress;
		if (!Ethereum_Client.isAddress(recAddr)){
			alert('Invalid Recipient Address')
			
			return
		}
		user.recipientAddress = recAddr

		
		////validate amount
		let recAmount = this.state.amountToSent;
		let convertedAmount = _.toNumber(recAmount)
		if(!_.isNumber(convertedAmount) || convertedAmount <= 0){
			alert('Invalid Amount')
			
			return
		}
		user.amount = convertedAmount

		//transfer coin
		// OneAgentBoth.transfer(recAddr, {from: sendAddr, value: Ethereum_Client.toWei(convertedAmount, 'ether')}, (err, res) => {
		// 	if(!err){
		// 		console.log('success'+ res)
		// 		console.log('succes type is' + typeof(res))
		// 		user.HashTransaction = res
		// 	}
		// 	console.log(err)
		// })
		// Ethereum_Client.eth.sendTransaction({from: sendAddr, to:recAddr, value: Ethereum_Client.toWei(recAmount, 'ether')})
		// OneAgentBoth.transfer(recAddr, Ethereum_Client.toWei(convertedAmount, 'ether'), {from:sendAddr}, function(err, res){
		// 	if(!err){
		// 		console.log('success'+ res)
		// 		console.log('succes type is' + typeof(res))
		// 		user.HashTransaction = res
		// 	}
		// 	console.log(err)
		// })

		// Ethereum_Client.eth.sendTransaction({to:recAddr, from:recAddr, data: recAmount}, (err, res) => {
		// 	if(!err){
		// 		console.log('success'+ res)
		// 		console.log('succes type is' + typeof(res))
		// 		user.HashTransaction = res
		// 	}
		// 	console.log(err)
		// })
		
		//transfer coin
		OneAgentBoth.transfer(recAddr, Ethereum_Client.toWei(convertedAmount, 'ether'), {from: Ethereum_Client.eth.coinbase}, (err, res) => {
			if(!err){
				console.log('success'+ res)
				console.log('succes type is' + typeof(res))
				user.HashTransaction = res
			}
			console.log(err)
		})
		this.setState({storeInfo: user})
	}

	cleanInfo(){
		const user  = Object.assign({}, this.state.storeInfo)
		user.recipientAddress = ""
		user.amount			  = ""
		user.sendAddress	  = ""
		this.setState({storeInfo: user})
	}
	
  render() {
    return (
      <div className="Declare">
			<TransferMarkup
						acceptSender 	= {this.acceptSenderAddress}
						acceptRecipient = {this.acceptRecipientAddress}
						acceptAmount	= {this.acceptAmount}
						transferTok		= {this.transferTokens}
						cleanInf 		= {this.cleanInfo}
						
						sendAdd 		= {this.state.storeInfo.sendAddress}
						recAdd			= {this.state.storeInfo.recipientAddress}
						convAmou		= {this.state.storeInfo.amount}
						HashTrans	    = {this.state.storeInfo.HashTransaction}
						/>
		</div>
    );
  }
}

export default TransferCode;