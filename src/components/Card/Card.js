import React, { Component } from 'react'
import {
    CardBackground,
    Text,
} from './CardStyles'


export default class Home extends Component {

   
    render() {
        return (
            <CardBackground>
                <Text>{this.props.text}</Text>
            </CardBackground>

            
        )
    }
}
