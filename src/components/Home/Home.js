import React, { Component } from 'react'
import Card from '../Card/Card'
import InputNew from '../InputNew/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    HomeBackgroung,
    CenterContainer,
    MainContainer, 
    LeftContainer,
    RigthContainer,
    WrapperContainer,
    WrapperCollumn, 
    Search,
    InputStyled
    
} from './HomeStyles'



export default class Home extends Component {

    state = {
        items: []
    }

    registerItem = (product, amount, category) => {
        const newItem = {
            id: Math.random(),
            product: product,
            amount: amount,
            category: category,
        }

        this.setState({ items: [...this.state.items, newItem] })
        
    }
    removedItem =(id) => {
        const originalList = this.state.items

        this.state.items.forEach((element, i) => {
            if (element.id === id) originalList.splice(i, 1)
        })

        this.setState({
            items: originalList
        })
    }
    
   
    render() {
        return (
            <HomeBackgroung>
                <MainContainer>
                <Search> 
                    <InputStyled type="text" placeholder="Pesquisar"  />
                    <FontAwesomeIcon icon={faSearch} size="1x" color= "#ff6363" />
                </Search> 
                    <CenterContainer>
                        <Card text="Atenção" />
                    </CenterContainer>
                    <WrapperContainer>
                        <LeftContainer>
                            <Card text="Produtos"/>
                        </LeftContainer>
                        <WrapperCollumn>
                            <RigthContainer>
                                <Card text="Novo Produto" />
                            </RigthContainer>
                            <RigthContainer>
                                <Card text="Nova Categoria"/>
                            </RigthContainer>
                        </WrapperCollumn>
                    </WrapperContainer>
                </MainContainer>
            </HomeBackgroung>
        )
    }
}
