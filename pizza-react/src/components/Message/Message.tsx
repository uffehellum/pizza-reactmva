import React from 'react'
import { DocumentCard, DocumentCardLogo, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'

interface MessageProps {
    who: string,
    text: string,
    key: number,
}

export default function Message(props: MessageProps) {
    const logoIcon = props.who === 'human' ? 'Contact' : 'Robot'
    return <DocumentCard>
        <DocumentCardLogo logoIcon={logoIcon}></DocumentCardLogo>
        <i className={"ms-Icon ms-Icon--" + logoIcon} aria-hidden="true"></i>
        <DocumentCardTitle title={props.text} />
        {/* <DocumentCardLogo logoIcon={"ms-Icon--" + logoIcon} /> */}
    </DocumentCard>
}
