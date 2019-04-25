import React from 'react';

import {Form, FormGroup, FormControl, Col, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

const TransferMarkup = (props) => {
        return (
            <div>
                <Form horizontal >               

                   <FormGroup controlId='formHorizontalText'>
                        <Col componentClass={ControlLabel} sm={2}>From
                        </Col>
                        <Col md={6}>
                            <FormControl type='text' placeholder='sender Address'  value={props.senderAddress} onChange={props.acceptSender} />
                         
                        </Col>
                    </FormGroup>

                    <FormGroup controlId='formHorizontalText'>
                        <Col componentClass={ControlLabel} sm={2}>To
                        </Col>
                        <Col md={6}>
                            <FormControl type='text' placeholder='recipient Address'  value={props.recipientAddress} onChange={props.acceptRecipient} />
                         
                        </Col>
                    </FormGroup>

                    <FormGroup controlId='formHorizontalText'>
                        <Col componentClass={ControlLabel} sm={2}>Amount
                        </Col>
                        <Col md={6}>
                            <FormControl type='number' placeholder=' enter amount'  value={props.amountToSent} onChange={props.acceptAmount} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col mdOffset={4} xs={4} md={6} smOffset={4} sm={6}>
                            <Button bsStyle='success' onClick={props.transferTok}>send</Button>
                        </Col>          
                        <Col  mdOffset={4}  xs={3} md={6} smOffset={4}sm={6}>
                            <Button bsStyle='warning' onClick={props.cleanInf} >Clean</Button>
                        </Col>                   
                    </FormGroup>
                </Form>
                <ListGroup >
                <ListGroupItem bsStyle="success">Sent address: {props.sendAdd}</ListGroupItem>
                    <ListGroupItem bsStyle="success">Recipient address: {props.recAdd}</ListGroupItem>
                    <ListGroupItem bsStyle="success">Amount address: {props.convAmou}</ListGroupItem>
                    <ListGroupItem bsStyle="success">Transaction Hash: {props.HashTrans}</ListGroupItem>
               </ListGroup>
        </div>
    );    
}
export default TransferMarkup; 