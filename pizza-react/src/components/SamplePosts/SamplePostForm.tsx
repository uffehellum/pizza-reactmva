import * as React from 'react';

interface ISamplePostFomProps {
    title: string,
    body: string,
    submitText: string
}
interface ISamplePostFomState extends ISamplePostFomProps {
    posts: IPost[];
}
interface IPost {
    title: string;
    body: string;
}
export default class SamplePostForm extends React.Component<ISamplePostFomProps, ISamplePostFomState>{
    constructor(props: any) {
        super(props)
        this.state = {
            title: this.props.title || "XBox T",
            body: this.props.body || "XBox D",
            submitText: this.props.submitText || "XBox g",
            posts: []
        }
    }
    onButtonClick(evt: any) {
        console.log("Form Triggered");
        const post = {
            title: this.state.title,
            body: this.state.body,
        }
        this.setState({ 'submitText': this.state.title, posts: [post, ...this.state.posts] });
        //console.log(this.state.posts);

    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onButtonClick.bind(this)} className="formSubmit">
                    <div>
                        <label >title</label>
                        <input className={"titleField"} value={this.state.title} onChange={((evt: any) => this.setState({ title: evt.target.value })).bind(this)} />
                    </div>
                    <br />
                    <div>
                        <label>body</label>
                        <input className={"bodyField"} value={this.state.body} onChange={((evt: any) => this.setState({ body: evt.target.value })).bind(this)} />
                    </div>
                    <br />onSubmit
            <button type="submit" onSubmit={this.onButtonClick.bind(this)} >{this.state.submitText}</button>
                </form>
                {this.state.posts &&
                    this.state.posts.map((post, index) => <li key={index}><span>{post.title}</span><span>{post.body}</span></li>)
                }
            </div>
        );
    }
}