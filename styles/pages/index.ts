import styled from 'styled-components'
import ImageNext from 'next/image'

export const Header = styled.header`
    gap: 0.8em;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #000000;
`

export const LogoHeader = styled(ImageNext)`
    width: 1.6em;
    align-self: center;
`

export const TextHeader = styled.div`
    align-self: center;

    span {
        color: #FFFFFF;
        font-size: 0.8em;
        white-space: nowrap;
        font-family: 'Inter', sans-serif;
    }

    .bold {
        font-weight: 800;
    }

    .lighter {
        font-weight: 300;
    }

    @media screen and (max-width: 350px) {
        font-size: 0.78em;
    }
`

export const Container = styled.main`
    display: flex;
    background-color: #242424;
`

export const ImageMain = styled(ImageNext)`
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
        color: #FFFFFF;
        font-size: 1em;
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
        color: #8E8E8E;
        font-size: 1.1em;
        font-weight: 500;
    }
`

export const Button = styled.button`
    width: 110%;
    border: none;
    padding: 1em;
    display: flex;
    color: #242424;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 3em;
    align-self: center;
    border-radius: 20px;
    align-items: center;
    transform: scale(0.9);
    background-color: #F7C033;
    transition-duration: 0.2s;
    transition-timing-function: linear;

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
    background-color: #F1F0F0;
`

export const Image = styled(ImageNext)`
    width: 100%;
    height: auto;
`

export const About = styled.div`
    display: flex;
    padding: 3em 1.5em;
`

export const TitleAbout = styled.h2`
    span {
        font-size: 1em;
        font-weight: bold;
    }

    .normal {
        color: #F6F5F5;
        
    }

    .highlighted {
        color: #F7C033;
    }
`

export const DescriptionAbout = styled.span`
    display: flex;
    color: #F6F5F5;
    margin-top: 1em;
    font-weight: 300;
    line-height: 25px;
`

export const ListAttributesAbout = styled.ul`
    margin-top: 2em;
    margin-left: 1em;
`

export const AttributeAbout = styled.li`
    color: #F6F5F5;
    margin-top: 1em;
    font-weight: 400;
    font-family: 'Inter', sans-serif;

    .bold {
        color: #F6F5F5;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
    }
`

export const PriceAbout = styled.h3`
    margin-top: 2em;
    align-self: center;
    padding: 0.1em 1em;
    text-align: center;
    border-radius: 10px;
    border: 3px solid #f7c033;

    span {
        font-size: 1em;
        color: #f3f3f3;
        font-family: 'Inter', sans-serif;
    }

    .normal {
        font-weight: normal;
    }

    .bold {
        font-weight: bold;
    }

    @media screen and (max-width: 350px) {
        span {
            font-size: 0.85em;
        }
    }
`

export const ButtonAbout = styled.a`
    width: 12em;
    padding: 1em;
    display: flex;
    color: #FFFFFF;
    font-size: 1em;
    margin-top: 3em;
    font-weight: bold;
    align-items: center;
    flex-direction: row;
    border-radius: 30px;
    text-decoration: none;
    transform: scale(0.9);
    justify-content: center;
    background-color: #F7C033;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        transform: scale(1);
    }

    svg {
        width: 1.4em;
        height: auto;
        margin-left: 0.5em;
    }
`

export const Register = styled.div`
    display: flex;
    padding: 2em 2em;
    background-color: #F1F0F0;
`

export const TitleRegister = styled.h3`
    color: #242424;
    font-weight: 500;
    font-size: 1.5em;
    text-align: center;

    .bold {
        color: #242424;
        font-weight: bold;
    }
`

export const DescriptionRegister = styled.h2`
    color: #242424;
    font-size: 1em;
    margin-top: 1em;
    font-weight: bold;
    text-align: center;
`

export const ButtonRegister = styled.a`
    width: 12em;
    padding: 1.2em;
    color: #FFFFFF;
    font-size: 1em;
    margin-top: 2em;
    font-weight: bold;
    text-align: center;
    align-self: center;
    border-radius: 30px;
    text-decoration: none;
    transform: scale(0.9);
    background-color: #F7C033;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        transform: scale(1);
    }
`

export const Footer = styled.footer`
    display: flex;
    padding: 3em 0em;
    background-color: #000000;
`

export const LogoFooter = styled(ImageNext)`
    width: 10em;
    height: auto;
    align-self: center;
`