import styled, { css } from 'styled-components'
import InputMaskRaw from 'react-input-mask'

export const Container = styled.form`
    gap: 2em;
    width: 70%;
    display: flex;
    padding-top: 1em;
    align-self: center;
`

export const Text = styled.div`
    span {
        font-size: 1em;
        color: ${props => props.theme.color};
    }

    .bold {
        font-weight: bold;
    }

    .lighter {
        font-weight: 500;
    }
`

const styleInput = css`
    width: 100%;
    border: none;
    padding: 1em;

    :focus {
        outline: none;
    }

    ::placeholder {
        font-size: 1.1em;
        font-weight: 500;
        color: ${props => props.theme.placeholderColor};
    }
`

export const Input = styled.input`
    ${styleInput}
`

export const InputMask = styled(InputMaskRaw)`
    ${styleInput}
`

export const Button = styled.button`
    width: 110%;
    border: none;
    padding: 1em;
    display: flex;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 3em;
    align-self: center;
    border-radius: 20px;
    align-items: center;
    transform: scale(0.9);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }
`