import React from 'react';
import {Form, FormGroup, FormControl, Col, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

 
const BalanceMarkup = (props) => {

    return (
    <div>
        <Form horizontal  onClick={props.moneyInformation} >
            <FormGroup controlId='formHorizontalText'>
                <Col componentClass={ControlLabel} sm={2}>Address
                </Col>
                <Col md={6}>
                    <FormControl type='text' placeholder='enter Address' value={props.enteredAddressvalue} onChange={props.testInput}/>
                </Col>
            </FormGroup>
 
            <FormGroup>
                <Col smOffset={2} md={4} >
                    <Button bsStyle='success' onClick = {props.displayInput} >Double Check</Button>
                </Col>
            </FormGroup>
            </Form>

            <ListGroup >
               <ListGroupItem bsStyle="success">User address: {props.address}</ListGroupItem>
               <ListGroupItem bsStyle="success">Token Balance: {props.token}</ListGroupItem>
               <ListGroupItem bsStyle="info">Ether Balance: {props.balance}</ListGroupItem>
               <ListGroupItem bsStyle="info">Coinbase: {props.coinbase}</ListGroupItem>
            </ListGroup>
    </div>
    );
}
export default BalanceMarkup;