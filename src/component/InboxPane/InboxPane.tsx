import React from 'react'
import InboxItem from '../InboxItem'
import Message from '../Message'

export default function InboxPane() {
    return (
        <div id="inbox-pane">
            <h1>inbox</h1>
            <Message message="hello world" />
            <table>
                <thead>
                    <tr>
                        <th>Chat time</th>
                        <th>From</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <InboxItem />
                </tbody>
            </table>
        </div>
    )
}
