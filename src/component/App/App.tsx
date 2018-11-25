import React, { Component } from 'react';
import logo from './logo.svg';
import ConversationPane from '../ConversationPane'
import InboxPane from '../InboxPane'
import StorePane from '../StorePane'
import samples from '../../data'
import { Humans, Stores, Conversation } from '../../data'

import './App.css';

interface AppState {
  humans: Humans,
  stores: Stores,
  selectedConversation: Conversation[]
}

class App extends Component<any, AppState> {

  constructor(props: any) {
    super(props)
    this.state = {
      humans: {},
      stores: {},
      selectedConversation: [],
    }
  }

  loadSampleData = () => {
    this.setState(samples)
  }

  setSelectedConversation=(conversations:Conversation[])=>{
    this.setState({selectedConversation : conversations})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.loadSampleData}>Load</button>
        <div className="container">
          <div className="column">
            <InboxPane 
              humans={this.state.humans} 
              setSelectedConversation= {this.setSelectedConversation} 
              />
          </div>
          <div className="column">
            <ConversationPane conversations={this.state.selectedConversation} />
          </div>
          <div className="column">
            <StorePane stores={this.state.stores} />
          </div>
        </div>
      </div>
    )
  }

}

export default App;
