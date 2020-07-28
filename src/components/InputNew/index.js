import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    InputStyled,
    InputNative,
    LabelWrapper,
    Label,
    Helper,
    ErrorMessage,
    RequiredSign,
    LabelRequiredWrapper,
    StartIcon,
    EndIcon,
} from './InputStyled'

const Input = props => {
    const [isValid, setIsValid] = useState(true)

    return (
        <LabelWrapper>
            {props.label &&
                <LabelRequiredWrapper>
                    <Label isValid={isValid}>
                        {props.label}
                    </Label>
                    {props.required && <RequiredSign>*</RequiredSign>}
                </LabelRequiredWrapper>
            }
            <InputStyled isValid={isValid} {...props}>
                {props.startIcon && <StartIcon icon={props.startIcon} isvalid={isValid.toString()} />}
                <InputNative onChange={e => setIsValid(validate(props.validationRule, e.target.value, props.required, props.validate))} type={props.type || 'text'} />
                {props.endIcon && <EndIcon icon={props.endIcon} isvalid={isValid.toString()} />}
            </InputStyled>
            {(props.helper && isValid) && <Helper isValid={isValid}>{props.helper}</Helper>}
            {(props.errorMessage && !isValid) && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
        </LabelWrapper>
    )
}

const validate = (regex, payload, isRequired, validateToParent = () => {}) => {
    if (payload === '' && isRequired) {
        validateToParent(false, payload)
        return false
    }
    if (payload === '' && !isRequired) {
        validateToParent(true, payload)
        return true
    }
    if (!regex) {
        validateToParent(true, payload)
        return true
    }
    const expression = new RegExp(regex)
    const isRegexValid = expression.test(payload)
    validateToParent(isRegexValid, payload)
    return isRegexValid
}

Input.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    startIcon: PropTypes.object,
    endIcon: PropTypes.object,
    validationRule: PropTypes.func,
    validate: PropTypes.func,
    type: PropTypes.string,
    helper: PropTypes.string,
    errorMessage: PropTypes.string,
    width: PropTypes.string,
}
Input.defaultProps = {
    label: null,
    required: false,
    startIcon: null,
    endIcon: null,
    validationRule: undefined,
    validate: undefined,
    type: null,
    helper: null,
    errorMessage: null,
    width: null,
}

export default Input

