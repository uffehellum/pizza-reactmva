import React, { Component } from 'react'
import Redux from 'redux'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import { Post } from './actions/types'

export interface OwnProps {
  propFromParent: number
}

interface StateProps {
  posts: Post[] // FromReduxStore
}

interface DispatchProps {
  fetchPosts: () => void
}

type Props = StateProps & DispatchProps & OwnProps

interface State {
  // posts: Post[]
}

class Posts extends Component<Props, State, any> {

  constructor(props: Props) {
    super(props)
  }

  componentWillMount() {
    console.log('Posts.componentWillMount()')
    this.props.fetchPosts()
  }

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
        {posts.map((p: Post) =>
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.userId}</td>
          </tr>)}
      </tbody>
    </table>

  render = () =>
    <div>
      <h1>Posts</h1>
      {this.props && this.props.posts && (this.props.posts as any).items && this.renderPosts((this.props.posts as any).items)}
    </div>
}

interface myReduxState {
  posts: Post[]
}

function mapStateToProps(state: myReduxState, ownProps: OwnProps): StateProps {
  return {
    ...ownProps,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
  return {
    // ...ownProps,
    fetchPosts: ()=> dispatch(fetchPosts)
  }
}

interface initialState {
  posts: Post[]
}

export default connect
  <myReduxState, DispatchProps, OwnProps, initialState>
  (mapStateToProps, mapDispatchToProps)
  (Posts)
