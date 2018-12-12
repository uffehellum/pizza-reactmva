import * as React from 'react'

interface IButtonState {
    value: string;
}
export class Button extends React.Component<any, IButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            value: "XBox"
        }
    }
    render() {
        return (
            <div>
                <button type="submit" onClick={this.onHandleClick.bind(this)}>{this.state.value}</button>
            </div>
        );
    }
    onHandleClick() {
        this.setState({value: "XBox 2.0"});
    }
}