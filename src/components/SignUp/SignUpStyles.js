import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const LinkCustom = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const SignUpBackgroung = styled.div`
    background-color: #f8f8f8;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: flex-end;
    padding-right: 50px;
`
export const ButtonsArea = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height:max-content ;
    -webkit-box-shadow: 0px 5px 7px 2px rgba(207,207,207,0.95);
    -moz-box-shadow: 0px 5px 7px 2px rgba(207,207,207,0.95);
    box-shadow: 0px 5px 7px 2px rgba(207,207,207,0.95);
`
export const Title =styled.div`
    font-family: SegoeUI;
    font-size: ${props => props.size};
    color: ${props => props.color};
`
export const ButtonsWrapper =styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`
export const InputStyled = styled.input`
    width: 100%;
    height: 20px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 0;
    border-color: #000000;
    outline: 0;
    margin-right: 5px;
`
export const WrapperColumn =styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`
export const WrapperRow =styled.div`
    display: flex;
    flex-direction: row;
`
export const Line =styled.div`
    border: 1px solid #00cc66;
    width: 100%;
    margin-right: 5px;
    margin-left: 5px;
`
export const WrapperLine =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
`
