import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    gap: 0.8em;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${props => props.theme.background};
`

export const Logo = styled(Image)`
    width: 1.6em;
    align-self: center;
`

export const Text = styled.div`
    align-self: center;

    span {
        font-size: 0.8em;
        white-space: nowrap;
        color: ${props => props.theme.color};
        font-family: ${props => props.theme.font.inter};
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