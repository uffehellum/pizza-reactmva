import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import App from './component/App/App';
import ConversationPane from './component/ConversationPane';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
