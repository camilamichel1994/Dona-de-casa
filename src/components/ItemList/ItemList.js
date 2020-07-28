import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item/Item'
import {
    List,
    Message,
    Wrapper,
    LinkCustom
    } from './ItemListStyles'

export default class ItemList extends Component {

    renderEmptyMessageList = () => {
        if(this.props.items.length == 0) 
            return (
                <Message>
                    Sem itens, favor clicar no ícone para adicionar! 
                    <Wrapper> 
                        <LinkCustom to="/register">
                            <FontAwesomeIcon icon={faPlusCircle} size="2x" color= "#ff6363"/>
                        </LinkCustom>
                    </Wrapper>
                </Message>
            )
    }

    generateList = () => {
        const itemList = []

        this.props.items.forEach(i => {
            itemList.push(
                <Item removed={this.props.removed} key={i.id} id={i.id} product={i.product} amount={i.amount} category={i.category}/>
            )
        });
        return itemList
    }

    render = () => (
        <List>
            { this.renderEmptyMessageList() }
            { this.generateList() }
        </List>
    )
}

