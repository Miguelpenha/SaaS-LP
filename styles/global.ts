import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        color: ${props => props.theme.background};
        font-family: ${props => props.theme.font.raleway};
    }

    :not(.swiper .swiper-wrapper) {
        flex-direction: column;
    }

    *::selection {
        background-color: ${props => props.theme.background};
    }

    body {
        display: flex;
        background-color: ${props => props.theme.color};
    }
`