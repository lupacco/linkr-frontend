import { createGlobalStyle } from "styled-components";

// font-family: 'Lato', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'Passion One', cursive;

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    body{
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
