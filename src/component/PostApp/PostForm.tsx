import React, { Component, FormEvent } from 'react'

export default class PostForm extends Component<any, any> {

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))

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
