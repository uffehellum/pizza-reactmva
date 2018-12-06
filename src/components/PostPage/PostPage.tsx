import React, { Component } from 'react'
import PostForm from '../PostForm/PostForm'
import Posts from '../PostList/PostList'

export default class PostPage extends Component {
    render() {
        return (
            <div>
                <PostForm />
                <hr />
                <Posts propFromParent={7} />
            </div>
        )
    }
}
