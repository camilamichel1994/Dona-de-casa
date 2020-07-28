import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingBag, ShoppingCart, Clipboard } from 'react-feather'
import {
    RegisterBackgroung,
    NameItem,
    WrapperRow,
    Title,
    AmountItem,
    Radio,
    WrapperColumn,
    Line,
    Container,
    WrapperIcon
} from './RegisterStyles'

export default class Register extends Component {

    state = {
        product: '',
        amount: 0,
        category: '',
    }
   
    render() {

        return (
            <RegisterBackgroung>
                <Container>
                    <WrapperColumn>
                        <WrapperRow>
                            <Line>
                                <Clipboard />
                                <Title>Cadastrar Item</Title>
                            </Line>
                        </WrapperRow>
                        </WrapperColumn>   
                        <WrapperRow>
                            <Title>Nome:</Title>
                            <NameItem value={this.state.product} onChange={(event) => this.setState({ product: event.target.value })} />
                        </WrapperRow>     
                        <WrapperRow>
                            <Title>Categoria:</Title> 
                            <Radio type="radio" value="1" name="category"  value={this.state.category} onChange={() =>  this.setState({ category: 'Alimento' })} /> Alimento
                            <Radio type="radio" value="2" name="category"  value={this.state.category} onChange={() => this.setState({ category: 'Limpeza' })} /> Limpeza
                            <Radio type="radio" value="3" name="category"  value={this.state.category} onChange={() => this.setState({ category: 'Higiene' })} /> Higiene
                        </WrapperRow>   
                        <WrapperRow>
                                <Title>Quantidade Inicial:</Title>
                                <AmountItem value={this.state.amount} onChange={(event) => this.setState({ amount: event.target.value })} type="number" /> 
                       </WrapperRow>  
                       <WrapperIcon>
                            <FontAwesomeIcon icon={faShoppingCart} size="2x" color= "#ff6363" onClick={() => this.props.addItem(this.state.product, this.state.amount, this.state.category)}  />  
                       </WrapperIcon>
                       
                </Container>

                
            </RegisterBackgroung>
        )
    }
}
