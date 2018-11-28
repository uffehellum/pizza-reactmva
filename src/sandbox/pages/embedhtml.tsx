import React from 'react'
import EmbedhtmlPane from '../../component/EmbedHtmlPane'

export default function EmbedhtmlPage() {
    return (
        <div>
            <h1>Sample Embedhtml  Pane</h1>
            <EmbedhtmlPane header="just text" html="my cat has a hat" />
            <EmbedhtmlPane header="bold tag" html="my cat <b>has</b> a hat" />
            <EmbedhtmlPane header="green h2 tag" html='<h2 style="color:green;">something</h2>' />
        </div>
    )
}
