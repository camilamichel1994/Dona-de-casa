import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colorSwitcher = (isValid) => isValid ? '#2C3E50' : '#D92027'

export const InputStyled = styled.div`
    border: ${({ isValid }) => `3px ${colorSwitcher(isValid)} solid`};
    width: ${(width) => width ? width : ''};
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFFFFF;
    justify-content: ${({ startIcon, endIcon }) => {
        if (startIcon) return 'flex-start'
        if (endIcon) return 'flex-end'
    }};
`

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Label = styled.div`
    font-size: 14px;
    color: ${({ isValid }) => colorSwitcher(isValid)};
    font-weight: 500;
    margin: 0px 0px 8px 3px;
`

export const Helper = styled.div`
    font-size: 14px;
    color: ${({ isValid }) => colorSwitcher(isValid)};
    margin: 8px 0px 0px 3px;
`

export const ErrorMessage = styled.div`
    font-size: 14px;
    color: #D92027;
    margin: 8px 0px 0px 3px;
`

export const InputNative = styled.input`
    padding: 11px;
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: #FFFFFF;
    width: 100%;
    box-sizing: border-box;
`

export const RequiredSign = styled.div`
    color: #D92027;
    font-weight: bold;
    font-size: 18px;
    margin-left: 5px;
`

export const LabelRequiredWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StartIcon = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
    color: ${({ isvalid }) => colorSwitcher(isvalid === 'true')};
    padding-left: 10px;
`

export const EndIcon = styled(FontAwesomeIcon).attrs({ size: 'lg' })`
    color: ${({ isvalid }) => colorSwitcher(isvalid === 'true')};
    padding-right: 10px;
`