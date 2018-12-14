import React, { Component, FormEvent } from 'react'
import { connect } from 'react-redux'
import { newPost } from '../../redux/actions/postActions'
import { Post } from '../../types'
import SamplePostForm from '../SamplePosts/SamplePostForm';

export class PostForm extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            title: this.props.title,
            body: this.props.body,
            submitText: this.props.submitText
        }
    }
    onConsole = () => {
        console.log("title: ", this.state.title);
    }
    onSub = () => {
        this.setState({submitText: "back"})
    }
    onChange = ({ target }: { target: { name: string, value: string } }) =>
        this.setState({ [target.name]: target.value })

    onSubmit = (e: FormEvent<any>) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body,
    
        }
        console.log(post);
        this.props.newPost(post)
    }

    render = () =>
        <div>
            <h1>Add Post</h1>
            <br/>
            <form onSubmit={this.onSubmit} className="formSubmit">
                <div>
                    <label >title</label>
                    <input 
                        className="titleField"
                        name="title" type="text"
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
                <br />onSubmit
                <button type="submit">Submit</button>
                <button className="postformSubmitButton" onClick={this.onSub.bind(this)}>{this.props.submitText}</button>

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
