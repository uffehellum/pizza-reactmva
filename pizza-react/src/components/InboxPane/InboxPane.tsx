import React, { Component } from 'react'
import InboxItem from '../InboxItem'
import { Humans, Conversation } from '../../data'

interface InboxPaneProps {
    humans: Humans,
    // setSelectedConversation: (conversations:Conversation[])=> void,
}

export default class InboxPane extends Component<InboxPaneProps, any>{

    constructor(props: InboxPaneProps) {
        super(props)
    }

    renderConvoSum = (human: string) =>
        <InboxItem
            key={human}
            index={human}
            details={this.props.humans[human]}
        // setSelectedConversation={this.props.setSelectedConversation}
        />

    render = () =>
        <div id="inbox-pane">
            <h1>inbox</h1>
            {Object.keys(this.props.humans).map(this.renderConvoSum)}
        </div>

}
