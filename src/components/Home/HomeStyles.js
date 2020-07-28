import styled from 'styled-components'
import { colors, typography } from '../../config/theme'

export const HomeBackgroung = styled.div`
    display: flex; 
    flex-direction: row;
    margin: 10px 10px;
    margin-top: 20px;
    justify-content: center;
    
    @media (max-width: 1050px) {
        display: flex;
        justify-content: center;
    }


`
export const LeftContainer = styled.div`
    width: 550px;
    height: 625px;
    margin-bottom: 15px;


    @media (max-width: 1050px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }

`
export const CenterContainer = styled.div`
    width: 1100px;
    height: 241px;
    margin-bottom:15px;
    
    @media (max-width: 1050px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
export const MainContainer = styled.div`
    width: 1100px;
    height: 1080px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    
    
    @media (max-width: 1050px) {
        width: 100%;
    }
   

`
export const RigthContainer = styled.div`
    width: 525px;
    height: 261px;
    margin-bottom: 15px;

    @media (max-width: 1050px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }

`
export const  WrapperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
    @media (max-width: 1050px) {
        width: 100%;
        justify-content: center;
        flex-direction: column;
    }

`

export const  WrapperCollumn =styled.div`
    display: flex;
    flex-direction: column;
`

export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #707070;
    width: 300px;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 5px;
    align-self: center;
    
`
export const InputStyled =styled.input`
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
`