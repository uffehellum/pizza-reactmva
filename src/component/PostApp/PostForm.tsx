import React, { Component, FormEvent } from 'react'
import { connect } from 'react-redux'
import { newPost } from './actions/postActions'
import { Post } from './actions/types'

class PostForm extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = ({ target }: { target: { name: string, value: string } }) =>
        this.setState({ [target.name]: target.value })

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body,
        }
        console.log(post)
        this.props.newPost(post)
    }

    render = () =>
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>title</label>
                    <input name="title" type="text"
                        onChange={this.onChange}
                        value={this.state.title} />
                </div>
                <br />
                <div>
                    <label>body</label>
                    <textarea name="body"
                        onChange={this.onChange}
                        value={this.state.body} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
}


function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        // ...ownProps,
        newPost: (post: Post) => newPost(post)(dispatch)
    }
}

interface DispatchProps {
    newPost: (post: Post) => void
}

interface OwnProps { }

interface StateProps { }

function mapStateToProps(state: myReduxState, ownProps: OwnProps): StateProps {
    return {
        ...ownProps,
        // posts: state.posts
    }
}

interface myReduxState { }

interface initialState {
    posts: Post[]
}

export default connect
    <myReduxState, DispatchProps, OwnProps, initialState>
    (mapStateToProps, mapDispatchToProps)
    (PostForm)