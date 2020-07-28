import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCircle } from '@fortawesome/free-solid-svg-icons'

import {
    HomeBackgroung,
    NavbarStyle,
    Name,
    NavbarWrapper,
} from './NavbarStyles'

export default class Navbar extends Component {

   
    render() {
        return (
            <HomeBackgroung>
                <NavbarWrapper>
                    <NavbarStyle>
                        <Name>BRAND</Name>
                        <FontAwesomeIcon icon={faCircle} size="2x" color="black" />   
                    </NavbarStyle>
                </NavbarWrapper>
            </HomeBackgroung>
        )
    }
}
