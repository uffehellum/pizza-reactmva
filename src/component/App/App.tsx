import React, { Component } from 'react';
import logo from './logo.svg';
import InboxPane from '../InboxPane'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="column">
            <InboxPane />
          </div>
          <div className="column">
            <InboxPane />
          </div>
          <div className="column">
            <InboxPane />
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
