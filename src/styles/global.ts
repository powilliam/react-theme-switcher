import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, #App {
        height: 100%;
        background: ${ props => props.theme.colors.background };
        font-size: 14px;
        font-family: sans-serif;
        color: ${ props => props.theme.colors.text };
    }
`