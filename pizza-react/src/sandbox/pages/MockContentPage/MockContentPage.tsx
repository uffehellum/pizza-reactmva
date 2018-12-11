import React, { Component } from 'react'
import { connect, MapStateToProps } from 'react-redux';
import { TelemetryEvent } from '../../../types'
import { SaveTelemetryEventAsBatch } from '../../../redux/actions/telemetryActions'
import EmbedHtmlPane from '../../../components/EmbedHtmlPane'

interface StateProps { }
interface OwnProps { }

interface DispatchProps {
    saveEvent: (telemetryEvent: TelemetryEvent) => void
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

    renderContentBlock = (block: ContentBlock) =>
        <EmbedHtmlPane header={block.header} html={block.body} />

    renderBlocks = (blocks: ContentBlock[]) =>
        blocks &&
        <div>
            {blocks.map(this.renderContentBlock)}
        </div>

    render = () =>
        this.renderBlocks([
            { header: 'cat', body: '<h3>cat</h3>' }
        ])
}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
        saveEvent: (telemetryEvent: TelemetryEvent) =>
            SaveTelemetryEventAsBatch(telemetryEvent)(dispatch)
    }
}

interface myReduxState { }

const mapStateToProps: MapStateToProps<StateProps, OwnProps, myReduxState> =
    (state: myReduxState, ownProps: OwnProps) => {
        return {
            ...ownProps,
        }
    }

export default connect
    <StateProps, DispatchProps, OwnProps, myReduxState>
    (mapStateToProps, mapDispatchToProps)
    (MockContentPage)