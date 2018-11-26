import React from 'react'
import {Conversation} from '../../data'
import Message from '../Message'

interface ConversationPaneProps {
    conversations: Conversation[]
    human:string
}

function renderMessage(val: Conversation) {
    return <Message who={val.who} text={val.text} key={val.time.getTime()} />
}

export default function ConversationPane(props: ConversationPaneProps) {
    return (
        <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>{props.human}</h3>
        <div id="messages">
          {props.conversations.map(renderMessage)}
        </div>
      </div>
    )
}