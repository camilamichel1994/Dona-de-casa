import styled from 'styled-components'
import { colors } from '../../config/theme'


export const ButtonsArea = styled.div`
    width: max-content;
    padding: 7px 8px;
    background-color: ${params => params.colorBackground};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border:  ${params => params.colorBackground === colors.black ? '1px solid black' : 'none'};
    margin-right: 10px;
`
export const Title = styled.div`
    font-size: ${params => params.size};
    color: ${params => params.colorFont};
    
`