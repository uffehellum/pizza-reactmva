import React, { Component } from 'react'
import { Conversation, HumanOrder } from '../../data'

interface InboxItemProps {
    details: {
        conversations: Conversation[],
        orders: HumanOrder[],
    },
    index: string,
    setSelectedConversation: (conversations: Conversation[]) => void,
}


export default class InboxItem extends Component<InboxItemProps, any>{

    constructor(props: InboxItemProps) {
        super(props)
    }

    sortByDate(a: { time: Date }, b: { time: Date }): number {
        return a.time > b.time ? -1 : a.time < b.time ? 1 : 0;
    }

    setSelected = () => {
        this.props.setSelectedConversation(this.props.details.conversations);
    }

    messageSummary(conversations: Conversation[]): string {
        const lastMessage = conversations.sort(this.sortByDate)[0];
        return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
    }

    render = () =>
        <tr>
            <td>
                <a onClick={this.setSelected
                }> {this.messageSummary(this.props.details.conversations)}</a >
            </td >
            <td>{this.props.index}</td>
            <td>{this.props.details.orders.sort(this.sortByDate)[0].status}
            </td>
        </tr >


}
