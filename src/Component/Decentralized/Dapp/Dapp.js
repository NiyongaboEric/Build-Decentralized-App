import React from 'react';
import './Dapp.css';

import BalanceCode from './Balance/BalanceCode'
import TransferCode from './Transfer/TransferCode'
import { Tab,Tabs } from 'react-bootstrap';

const Dapp = (props) => {
    return(
        <Tabs defaultActiveKey={1} id='uncontrolled-tab-example' className='nav nav-tabs'>
            <Tab eventKey={1} title='Check Balance'>
                <BalanceCode {... props}/>
            </Tab>
            <Tab eventKey={2} title='Transfer Money'>
                <TransferCode {... props}/>
            </Tab>
    </Tabs>
    );
}
export default Dapp;
