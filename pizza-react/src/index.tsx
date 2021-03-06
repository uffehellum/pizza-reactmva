import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './index.css';
import PizzaPage from './components/PizzaPage';
import PostApp from './components/PostPage';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul id="topnav">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/posts">Posts</Link></li>
                </ul>
                <Switch>
                    <Route path="/posts" component={PostApp} />
                    <Route path="/" component={PizzaPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
