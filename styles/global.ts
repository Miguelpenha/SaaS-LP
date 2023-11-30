import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        flex-direction: column;
        box-sizing: border-box;
        scroll-behavior: smooth;
        color: ${props => props.theme.background};
        font-family: ${props => props.theme.font.raleway};
    }

    *::selection {
        background-color: ${props => props.theme.background};
    }

    body {
        display: flex;
        background-color: ${props => props.theme.color};
    }
`