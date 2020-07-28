import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.div`
    display: flex;
    flex-direction: column;
`
export const Message = styled.div`
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`
export const LinkCustom = styled(Link)`
    text-decoration: none;
    color: inherit;
`
