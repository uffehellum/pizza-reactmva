import React from 'react'

interface MessageProps {
    who:string,
    text:string,
    key:number,
}
export default function Message(props:MessageProps) {
    return <p>{props.who} said: "{props.text}"</p>
}
