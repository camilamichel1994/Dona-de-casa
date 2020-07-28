import styled from 'styled-components'
import { colors } from '../../config/theme'

export const RegisterBackgroung = styled.div`
   display: flex; 
    margin: 10px 10px;
    margin-top: 20px;
    justify-content: center;
`

export const NameItem =styled.input`
    margin-left: 5px;
    height: 20px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 0 0;
    outline: 0;
    margin-right: 10px;
`

export const AmountItem =styled.input`
    margin-left: 5px;
    width: 60px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 0 0;
    outline: 0;
    padding: 8px;
`

export const WrapperRow =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0px;
   
`

export const WrapperColumn =styled.div`
    display: flex;
    flex-direction: column;
 
`
export const Title =styled.div`
    text-transform: uppercase;
`
export const Radio =styled.input`
    cursor: pointer;
`
export const Line =styled.div`
    border-bottom: 1px solid ${colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Container =styled.div`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${colors.primary};
    -webkit-box-shadow: 4px 3px 6px 0px rgba(255, 99, 99, 0.56);
    -moz-box-shadow: 4px 3px 6px 0px rgba(255, 99, 99, 0.56);
    box-shadow: 4px 3px 6px 0px rgba(255, 99, 99, 0.56);
`
export const WrapperIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding:5px;
`