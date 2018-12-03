import React, { Component } from 'react'

export interface EmbedHtmlPaneProps {
    header: string
    html: string
}

export default class EmbedHtmlPane extends Component<EmbedHtmlPaneProps> {

    constructor(props: EmbedHtmlPaneProps) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <div dangerouslySetInnerHTML={{__html: this.props.html}}/>
            </div>
        )
    }

}
