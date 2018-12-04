import React from 'react'
import { DocumentCard, DocumentCardTitle, DocumentCardLogo } from 'office-ui-fabric-react/lib/DocumentCard'

interface MessageProps {
    who: string,
    text: string,
    key: number,
}

export default function Message(props: MessageProps) {
    const logoIcon = props.who === 'human' ? 'Contact' : 'Robot'
    return <DocumentCard>
        <p>{props.text}</p>
        <DocumentCardLogo logoName={props.who} logoIcon={logoIcon} />
    </DocumentCard>
}
