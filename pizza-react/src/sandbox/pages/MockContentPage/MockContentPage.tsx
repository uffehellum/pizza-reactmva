import React, { Component } from 'react'
import { TelemetryEvent, Config } from '../../../types'
import EmbedHtmlPane from '../../../components/EmbedHtmlPane'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { showPeople, showDog, showSquirrel } from './ContentGenerator'
import ContentBlock from './ContentBlock'

export interface StateProps {
    config: Config
}

export interface OwnProps { }

export interface DispatchProps {
    saveContentEvent: (header: string) => void
    sendBatch: (telemetryEvent: TelemetryEvent, config: Config) => void
}

interface State {
    contentBlocks: ContentBlock[]
}

type Props = StateProps & OwnProps & DispatchProps

export class MockContentPage extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            contentBlocks: [
                { header: 'cat', body: '<h3>cat</h3>' }
            ]
        }
    }

    addContentFirst = (content: ContentBlock) => {
        const contentBlocks = [content, ...this.state.contentBlocks]
        this.setState({
            contentBlocks
        })
    }

    renderContentBlock = (block: ContentBlock) => {
        this.props.saveContentEvent(block.header)
        return <EmbedHtmlPane header={block.header} html={block.body} />
    }

    renderBlocks = (blocks: ContentBlock[]) =>
        blocks &&
        <div>
            {blocks.map(this.renderContentBlock)}
        </div>

    render = () =>
        <div>
            <h1>Mock content</h1>
            <p>You can add content from the buttons below</p>
            <DefaultButton onClick={showSquirrel(this.addContentFirst)}>Show Squirrel</DefaultButton>
            <DefaultButton onClick={showDog(this.addContentFirst)}>Show dog</DefaultButton>
            <DefaultButton onClick={showPeople(this.addContentFirst)}>Add people</DefaultButton>
            {this.renderBlocks(this.state.contentBlocks)}
        </div>

    componentWillUnmount = () => this.props.sendBatch(
        { event: 'leaving mock content page', payload: null, session: 'mock session', timestamp: new Date() },
        this.props.config
    )

    componentWillMount = () => console.log("ComponentWillMount")
}

