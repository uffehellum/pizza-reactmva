import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import store from '../redux/store/store'

import './index.css'
import ConfigPage from './pages/ConfigPage'
import PizzaPage from '../components/PizzaPage'
import PostPage from '../components/PostPage'
import ProfileStatusPage from './pages/ProfileStatusPage'
import TelemetryPage from './pages/TelemetryPage'
import stores from './pages/stores'
import embedhtml from './pages/embedhtml'
import * as serviceWorker from '../serviceWorker'
// import { browserHistory } from 'react-router'

// const goto = (url:string) => browserHistory.push(url)

const commandBarItems: (ICommandBarItemProps[]) = [
    {
        key: 'PizzaPage',
        name: 'PizzaPage',
        onClick: () => { window.location.assign('/') },
    },
    {
        key: 'ConfigPage',
        name: 'ConfigPage',
        onClick: () => { window.location.assign('/pages/configuration') },
    },
    {
        key: 'PostPage',
        name: 'PostPage',
        iconProps: {
            iconName: 'Posts'
        },
        href: '/posts',
        ['data-automation-id']: 'PostPage'
    },
    {
        key: 'Stores',
        name: 'Stores',
        iconProps: {
            iconName: 'Stores'
        },
        href: '/pages/stores',
        ['data-automation-id']: 'Stores'
    },
    {
        key: 'Telemetry',
        name: 'Telemetry',
        iconProps: {
            iconName: 'Telemetry'
        },
        href: '/pages/telemetry',
        ['data-automation-id']: 'TelemetryPage'
    },
    {
        key: 'Profile',
        name: 'Profile',
        iconProps: {
            iconName: 'Profile'
        },
        onClick: () => { window.location.assign('/pages/profilestatus') },
    },
]

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <CommandBar
                    items={commandBarItems}
                    // overflowItems={this.getOverlflowItems()}
                    // farItems={this.getFarItems()}
                    ariaLabel={'Use left and right arrow keys to navigate between commands'}
                />
                <ul id="sandboxnav">
                    <li><Link to="/">PizzaPage</Link> </li>
                    <li><Link to="/pages/configuration">ConfigPage</Link> </li>
                    <li><Link to="/posts">PostPage</Link> </li>
                    <li><Link to="/pages/stores">Stores</Link> </li>
                    <li><Link to="/pages/profilestatus">Profile</Link> </li>
                    <li><Link to="/pages/telemetry">Telemetry</Link> </li>
                </ul>
                <Switch>
                    <Route path="/pages/configuration" component={ConfigPage} />
                    <Route path="/pages/stores" component={stores} />
                    <Route path="/pages/embedhtml" component={embedhtml} />
                    <Route path="/pages/profilestatus" component={ProfileStatusPage} />
                    <Route path="/pages/telemetry" component={TelemetryPage} />
                    <Route path="/posts" component={PostPage} />
                    <Route path="/" component={PizzaPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
