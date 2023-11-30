import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
    display: flex;
    background-color: ${props => props.theme.secondaryColor};
`

export const ImageMain = styled(Image)`
    width: 100%;
    height: auto;
`

export const Form = styled.form`
    gap: 2em;
    width: 70%;
    display: flex;
    padding-top: 1em;
    align-self: center;
`

export const TextForm = styled.div`
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

export const Input = styled.input`
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

    :hover:not(:disabled) {
        transform: scale(1);
    }

    :disabled {
        opacity: 0.5;
        cursor: default;
    }
`

export const Description = styled.div`
    font-size: 1em;
    padding: 4em 2em;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    background-color: ${props => props.theme.secondary};
`

export const Footer = styled.footer`
    display: flex;
    padding: 3em 0em;
    background-color: ${props => props.theme.background};
`

export const LogoFooter = styled(Image)`
    width: 10em;
    height: auto;
    align-self: center;
`