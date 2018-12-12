import React, { Component } from 'react';
import ConversationPane from '../ConversationPane'
import InboxPane from '../InboxPane'
import StorePane from '../StorePane'
import samples from '../../data'
import { Humans, Stores, Conversation } from '../../data'
import { Route } from 'react-router-dom'
import './PizzaPage.css';
import Search from '../Search/Search';
import SearchBar from '../Search/SearchBar'
// import { initializeIcons } from '@uifabric/icons'

// initializeIcons()

interface AppState {
  humans: Humans,
  stores: Stores,
}

interface AppProps {
  params?: {
    human?: string
  }
  children?: any
}

class App extends Component<AppProps, AppState> {

  constructor(props: any) {
    super(props)
    this.state = {
      humans: {},
      stores: {},
    }
  }

  loadSampleData = () => {
    this.setState(samples)
  }

  componentWillMount() {
    this.loadSampleData()
  }

  render() {
    const humans = this.state.humans
    return (
      <div className="App">
        <div className="container">
         <div><SearchBar /></div>
        
          <div className="column" id="inbox">
            <InboxPane
              humans={humans}
            />
          </div>
          <div className="column">
            <Route exact path="/" render={() => <div>Select a Conversation from the Inbox</div>} />
            <Route path="/conversation/:human" render={({ match }) => {
              const human = match && match.params.human
              return human && humans[human]
                ? <ConversationPane human={human} conversations={humans[human].conversations} />
                : <div>oops {human} doesn't work</div>
            }} />

          </div>
          <div className="column" id="storepane">
            <StorePane stores={this.state.stores} />
          </div>
        </div>
      </div>
    )
  }

}

export default App;
