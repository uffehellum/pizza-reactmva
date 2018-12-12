import React, { Component } from 'react'
import { connect, MapStateToProps } from 'react-redux';
import { TelemetryEvent, Config } from '../../../types'
import { SaveTelemetryEventAsBatch, SendBatchedTelemetryEvents } from '../../../redux/actions/telemetryActions'
import EmbedHtmlPane from '../../../components/EmbedHtmlPane'
import { CommandButton, ActionButton } from 'office-ui-fabric-react/lib/Button'

interface StateProps {
    config: Config
}

interface OwnProps { }

interface DispatchProps {
    saveContentEvent: (header: string) => void
    sendBatch: (telemetryEvent: TelemetryEvent, config: Config) => void
}

interface ContentBlock {
    header: string
    body: string
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

    showDog = () =>
        this.setState({
            contentBlocks: [{ header: 'Dog', body: 'Swishy <i>wagging</i> Tail' }]
        })

    showSquirrel = () =>
        this.setState({
            contentBlocks: [{ header: 'squirrel', body: 'Bushy Tail' }]
        })

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
            <CommandButton onClick={this.showSquirrel}>Show Squirrel</CommandButton>
            <ActionButton onClick={this.showDog}>Show dog</ActionButton>
            {this.renderBlocks(this.state.contentBlocks)}
        </div>

    componentWillUnmount = () => this.props.sendBatch(
        { event: 'leaving mock content page', payload: null, session: 'mock session', timestamp: new Date() },
        this.props.config
    )

    componentWillMount = () => console.log("ComponentWillMount")
}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
        saveContentEvent: (header: string) => {
            let telemetryEvent: TelemetryEvent = {
                event: "content shown",
                payload: { header },
                timestamp: new Date(),
                session: "session",
            }
            SaveTelemetryEventAsBatch(telemetryEvent)(dispatch)
        },
        sendBatch: (telemetryEvent: TelemetryEvent, config: any) =>
            SendBatchedTelemetryEvents(telemetryEvent, config)(dispatch)

    }
}

interface myReduxState {
    config: Config
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
            config: state.config
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (MockContentPage)
