import React, { Component } from 'react'
import  ButtonNew from '../ButtonNew/index'
import InputNew from '../InputNew/index'
import { ReactComponent as LogoSingUp } from '../../assets/login.svg'
import { colors, typography } from '../../config/theme'
import {
    SignUpBackgroung,
    Title,
    ButtonsArea,
    ButtonsWrapper,
    ContentWrapper,
    LinkCustom,
    InputStyled,
    WrapperRow,
    WrapperColumn,
    Line,
    WrapperLine,

} from './SignUpStyles'

export default class SingUp extends Component {

    render() {
        return (
            <ContentWrapper>
                <SignUpBackgroung>
                    <ButtonsArea>
                        <Title color={colors.black} size="30px">Sing Up</Title>
                        <WrapperRow>
                                <WrapperColumn>
                                    <Title size="18px">Name:</Title>
                                    <InputStyled type="text" name="Nome" />
                                </WrapperColumn>
                                <WrapperColumn>
                                    <Title size="18px">Username:</Title>
                                    <InputStyled type="text" name="Nome" />
                                </WrapperColumn>
                            </WrapperRow>
                                <WrapperColumn>
                                    <Title size="18px">E-mail:</Title>
                                    <InputStyled  type="e-mail" name="Email" />
                                    <Title size="18px">Senha:</Title>
                                    <InputStyled  type="password"  name="Senha" />
                                </WrapperColumn> 
                        <ButtonsWrapper>
                            <ButtonNew title="Enviar"></ButtonNew>
                        </ButtonsWrapper>
                        <WrapperLine>
                            <Line /> 
                                <Title>Or</Title>
                            <Line /> 
                        </WrapperLine>
                        <WrapperColumn>
                            <Title size="18px">E-mail:</Title>
                            <InputStyled  type="e-mail" name="Email" />
                            <Title size="18px">Senha:</Title>
                            <InputStyled  type="password"  name="Senha" />
                                
                        </WrapperColumn> 
                    
                    </ButtonsArea>
                </SignUpBackgroung>
                
            </ContentWrapper>
        )
    }
}
