import styled from 'styled-components'

const themeSwitcher = (color, disabled, outlined) => {
    if (outlined) return 'transparent'
    if (disabled) return '#D8DCE6'
    return color ? color : '#00cc66'
}

export const ButtonStyled = styled.div`
    background: ${({ color, disabled, outlined }) => themeSwitcher(color, disabled, outlined)};
    padding: ${({ outlined }) => !outlined ? '15px 18px' : '12px 15px' };
    width: 250px;
    border-radius: ${({ round }) => round ? '50px' : '5px'};
    color: ${({ outlined, color, disabled }) => !outlined ? 'white' : themeSwitcher(color, disabled)};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.3s ease 0s;
    letter-spacing: 2.5px;
    -webkit-appearance: none;
    border: ${({ outlined, color, disabled }) => !outlined ? 'none' : `3px ${themeSwitcher(color, disabled)} solid` };
    &:hover {
        box-shadow: 0px 7px 13px -5px ${({ color, disabled, outlined }) => themeSwitcher(color, disabled, outlined)};
        -webkit-box-shadow: 0px 7px 13px -5px ${({ color, disabled, outlined }) => themeSwitcher(color, disabled, outlined)};
        transform: translateY(-4px);
    }
    &:active {
        box-shadow: none;
        transform: translateY(0px);
    }
`