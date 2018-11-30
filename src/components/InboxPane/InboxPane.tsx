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
            <table>
                <thead>
                    <tr>
                        <th>Chat time</th>
                        <th>From</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.props.humans).map(this.renderConvoSum)}
                </tbody>
            </table>
        </div>

}
