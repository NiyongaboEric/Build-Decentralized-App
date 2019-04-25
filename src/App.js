import React, { Component } from 'react';
import './App.css';
import Headers from './Component/Header/Headers';
import Body from './Component/Body/Body';
import Dapp from './Component/Decentralized/Dapp/Dapp';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Headers />
             <Body />
            <Dapp />
		</div>
    );
  }
}

export default App;
