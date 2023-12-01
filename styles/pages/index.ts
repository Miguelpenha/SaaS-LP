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