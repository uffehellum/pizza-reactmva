import React, { Component } from 'react'

interface Post {
  body: string
  id: number
  title: string
  userId: number
}

interface PostsState {
  posts: Post[]
}

export default class Posts extends Component<any, PostsState, any> {

  constructor(props: PostsState) {
    super(props)
  }

  componentWillMount() {
    console.log('Posts.componentWillMount()')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
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
