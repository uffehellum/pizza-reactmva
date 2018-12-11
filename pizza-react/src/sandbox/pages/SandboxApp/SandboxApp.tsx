import React from 'react'
import Topnav from './Topnav'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import store from '../../../redux/store'

import './index.css'
import ConfigPage from '../ConfigPage'
import MockContentPage from '../MockContentPage'
import PizzaPage from '../../../components/PizzaPage'
import PostPage from '../../../components/PostPage'
import ProfileStatusPage from '../ProfileStatusPage'
import TelemetryPage from '../TelemetryPage'
import stores from '../stores'
import embedhtml from '../embedhtml'

export default () =>
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Topnav />
                <Switch>
                    <Route path="/pages/configuration" component={ConfigPage} />
                    <Route path="/pages/stores" component={stores} />
                    <Route path="/pages/embedhtml" component={embedhtml} />
                    <Route path="/pages/mockcontent" component={MockContentPage} />
                    <Route path="/pages/profilestatus" component={ProfileStatusPage} />
                    <Route path="/pages/telemetry" component={TelemetryPage} />
                    <Route path="/posts" component={PostPage} />
                    <Route path="/" component={PizzaPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>

