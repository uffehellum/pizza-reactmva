import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PostForm from './PostForm'
import Posts from './Posts'
import store from './store'


export default class PostApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <PostForm />
                    <hr />
                    <Posts propFromParent={7}/>
                </div>
            </Provider>
        )
    }
}
