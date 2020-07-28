import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus , faMinus , faEdit , faList} from '@fortawesome/free-solid-svg-icons'
import {
    ItemBackgroung,
    Product,
    AmountCurrent,
    AmountWrapper,
    Title,
    Wrapper,
    WrapperColumn,
    WrapperRow,
    IconsWrapper,
    LineStyle


} from '../Item/ItemStyles'

export default class Item extends Component {

    state = {
        currentAmount: this.props.amount,
     
    }

    plus = () => {
       this.setState({currentAmount: this.state.currentAmount + 1 })
    }

    minus = () => {
        if(this.state.currentAmount > 0){
            this.setState({currentAmount: this.state.currentAmount - 1 })
        }
    }
    
    render() {
        return (
            <ItemBackgroung>
                <WrapperColumn>
                    <Wrapper>
                        <Product>{this.props.product}</Product>
                            <AmountWrapper>
                                <FontAwesomeIcon icon={faPlus} size="1x" color="black" onClick={this.plus} /> 
                                <AmountCurrent>{this.state.currentAmount}</AmountCurrent>
                                <FontAwesomeIcon icon={faMinus} size="1x" color="black" onClick={this.minus} />
                            </AmountWrapper>
                    </Wrapper>
                    <WrapperRow>
                        <Title>
                            Categoria: {this.props.category}
                        </Title>
                    </WrapperRow>
                    <IconsWrapper>
                        <FontAwesomeIcon icon={faTrash} size="lg" color="black" onClick={() => this.props.removed(this.props.id)} />
                        <FontAwesomeIcon icon={faEdit} size="lg" color="black"   onClick={() => alert("Editado")}/>
                    </IconsWrapper>
                    <LineStyle/>
                </WrapperColumn>
                
                

            </ItemBackgroung>
            
        )
    }
}
