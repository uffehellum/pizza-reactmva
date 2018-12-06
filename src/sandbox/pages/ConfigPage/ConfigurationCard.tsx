import React, { Component } from 'react'
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react/lib/DocumentCard'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { Config } from '../../../types'
import { connect, MapStateToProps } from 'react-redux';

interface DispatchProps { }

interface OwnProps { }

interface StateProps { config: Config }

type Props = DispatchProps & StateProps & OwnProps

export class ConfigurationCard extends Component<Props, any> {

    constructor(props: Props) {
        super(props)
    }

    configItem(key:string, value:string) {
        return  <TextField
        label={key}
        name={key}
        defaultValue={value}
        readOnly={true}
    />
    }

    render = () =>
        <DocumentCard>
            <DocumentCardTitle title="Configuration for Xbox Support React" />
            {Object.keys(this.props.config).map(key => 
                this.configItem(key, (this.props.config as any)[key])
                )}
        </DocumentCard>

}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return {
        ...ownProps,
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
    (ConfigurationCard)
