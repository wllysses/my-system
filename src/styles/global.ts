import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #F6F6F6;
        --primary-color: #537BF4;
        --secondary-color: #C9DDFD;
        --white: #fff;
        --grey: #E7E7E7;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }

    body {
        background: var(--background-color);
        --webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    body,
    input,
    textarea,
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`