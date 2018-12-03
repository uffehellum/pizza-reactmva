
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PostForm from '../PostForm/PostForm'
import Posts from '../PostList/PostList'
import store from '../../redux/store/store'


export default class PostPage extends Component {
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
