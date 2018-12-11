import React, { Component } from 'react'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar'
import { withRouter , RouteComponentProps} from "react-router-dom"


export class Topnav extends Component<RouteComponentProps> {

    constructor(props: any) {
        super(props)
    }

    render = () =>
        <CommandBar
            items={this.commandBarItems(this.props.history)}
            // overflowItems={this.getOverlflowItems()}
            // farItems={this.getFarItems()}
            ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />

    commandBarItems: ((history: any) => ICommandBarItemProps[]) = (history) => [
        {
            key: 'PizzaPage',
            name: 'PizzaPage',
            onClick: () => history.push('/'),
        },
        {
            key: 'ConfigPage',
            name: 'ConfigPage',
            onClick: () => history.push('/pages/configuration'),
        },
        {
            key: 'PostPage',
            name: 'PostPage',
            iconProps: {
                iconName: 'Posts'
            },
            onClick: () => history.push('/posts'),
            ['data-automation-id']: 'PostPage'
        },
        {
            key: 'Stores',
            name: 'Stores',
            iconProps: {
                iconName: 'Stores'
            },
            onClick: () => history.push('/pages/stores'),
            ['data-automation-id']: 'Stores'
        },
        {
            key: 'Telemetry',
            name: 'Telemetry',
            iconProps: {
                iconName: 'Telemetry'
            },
            onClick: () => history.push('/pages/telemetry'),
            ['data-automation-id']: 'TelemetryPage'
        },
        {
            key: 'Profile',
            name: 'Profile',
            iconProps: {
                iconName: 'Profile'
            },
            onClick: () => history.push('/pages/profilestatus'),
        },
    ]

}

export default withRouter(Topnav)
