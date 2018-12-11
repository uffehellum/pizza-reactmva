import React, {Component} from 'react'
import ConfigurationCard from './ConfigurationCard'
import MockConfigCard from './MockConfigCard'

export default class ConfigPage extends Component {

    render = ()=>
        <div>
            <h1>Debug Configuration Settings</h1>
            <div className="container">
                <div className="column">
                    <h2>Current Configuration</h2>
                    <ConfigurationCard />
                </div>
                <div className="column">
                    <h2>Current Configuration</h2>
                    <MockConfigCard />
                </div>
            </div>
        </div>
    
    componentWillUnmount = () => console.log("componentWillUnmount")
    componentWillMount =() => console.log("ComponentWillMount")
}
