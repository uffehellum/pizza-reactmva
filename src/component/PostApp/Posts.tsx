import React, { Component } from 'react'
import { types } from 'util';
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import {Post, PostsState} from './actions/types'

class Posts extends Component<any, PostsState, any> {

  constructor(props: PostsState) {
    super(props)
  }

  componentWillMount() {
    console.log('Posts.componentWillMount()')
    this.props.fetchPosts()
  }

  renderPost = (p: Post) =>
    <tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.title}</td>
      <td>{p.userId}</td>
    </tr>

  renderPosts = (posts: Post[]) =>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>userid</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(this.renderPost)}
      </tbody>
    </table>

  render = () =>
    <div>
      <h1>Posts</h1>
      {this.state && this.state.posts && this.renderPosts(this.state.posts)}
    </div>
}

export default connect(null, { fetchPosts })(Posts)
