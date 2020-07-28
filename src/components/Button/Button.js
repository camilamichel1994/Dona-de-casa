import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'


import {
    ButtonsArea,
    Title,
} from './ButtonStyled'


export default class Button extends Component {

    renderIcon = () => {
        switch (this.props.icon) {
            case "facebook":
                return <FontAwesomeIcon icon={faFacebookF} size="lg" color="white"/>
            case "apple":
                return <FontAwesomeIcon icon={faApple} size="lg" color="white" />
            case "google":
                return <FontAwesomeIcon icon={faGoogle} />
            default:
                return ""
        }
    }

    render() {
        return (
         <ButtonsArea colorBackground={this.props.backgroundColor} >
             { this.renderIcon() }
             <Title size={this.props.fontSize} colorFont={this.props.fontColor}>
                { this.props.value }
             </Title>
         </ButtonsArea>
         
        )
    }
}
