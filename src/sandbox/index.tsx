import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import './index.css'
import PizzaPage from '../components/PizzaPage'
import PostPage from '../components/PostPage'
import stores from './pages/stores'
import embedhtml from './pages/embedhtml'
import * as serviceWorker from '../serviceWorker'

ReactDOM.render(

    <BrowserRouter>
        <div>
            <ul id="sandboxnav">
                <li><Link to="/">PizzaPage</Link> </li>
                <li><Link to="/posts">PostPage</Link> </li>
                <li><Link to="/pages/stores">sample stores</Link> </li>
                <li><Link to="/pages/embedhtml">sample embedhtml</Link> </li>
            </ul>
            <Switch>
                <Route path="/pages/stores" component={stores} />
                <Route path="/pages/embedhtml" component={embedhtml} />
                <Route path="/posts" component={PostPage} />
                <Route path="/" component={PizzaPage} />
            </Switch>
        </div>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
