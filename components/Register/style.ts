import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 2em 2em;
    background-color: ${props => props.theme.secondary};
`

export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.theme.secondaryColor};

    .bold {
        font-weight: bold;
        color: ${props => props.theme.secondaryColor};
    }
`

export const Description = styled.h2`
    font-size: 1em;
    margin-top: 1em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.secondaryColor};
`

export const Button = styled.a`
    width: 12em;
    padding: 1.2em;
    font-size: 1em;
    margin-top: 2em;
    font-weight: bold;
    text-align: center;
    align-self: center;
    border-radius: 30px;
    text-decoration: none;
    transform: scale(0.9);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }
`