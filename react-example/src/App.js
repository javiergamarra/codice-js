import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Texto from './Text.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.text = 'Hi'
  }

  render() {
    return (
      <div className="App">
        <Texto value={this.text}></Texto>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
