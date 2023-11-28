import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        color: #000000;
        flex-direction: column;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Rubik', sans-serif;
    }

    *::selection {
        background-color: #00000042;
    }

    body {
        display: flex;
        background-color: #ffffff;
    }
`