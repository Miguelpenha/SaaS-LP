import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 3em 1.5em;
`

export const Title = styled.h2`
    span {
        font-size: 1em;
        font-weight: bold;
    }

    .normal {
        color: ${props => props.theme.tertiaryColor};
    }

    .highlighted {
        color: ${props => props.theme.primary};
    }
`

export const Description = styled.span`
    display: flex;
    margin-top: 1em;
    font-weight: 300;
    line-height: 25px;
    color: ${props => props.theme.tertiaryColor};
`

export const Attributes = styled.ul`
    margin-top: 2em;
    margin-left: 1em;
`

export const Attribute = styled.li`
    margin-top: 1em;
    font-weight: 400;
    color: ${props => props.theme.tertiaryColor};
    font-family: ${props => props.theme.font.inter};

    .bold {
        font-weight: bold;
        color: ${props => props.theme.tertiaryColor};
        font-family: ${props => props.theme.font.inter};
    }
`

export const Price = styled.h3`
    margin-top: 2em;
    align-self: center;
    padding: 0.1em 1em;
    text-align: center;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.primary};

    span {
        font-size: 1em;
        color: ${props => props.theme.color};
        font-family: ${props => props.theme.font.inter};
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

export const Button = styled.a`
    width: 12em;
    padding: 1em;
    display: flex;
    font-size: 1em;
    margin-top: 3em;
    font-weight: bold;
    align-items: center;
    flex-direction: row;
    border-radius: 30px;
    text-decoration: none;
    transform: scale(0.9);
    justify-content: center;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.primary};

    :hover {
        transform: scale(1);
    }

    svg {
        width: 1.4em;
        height: auto;
        margin-left: 0.5em;
    }
`