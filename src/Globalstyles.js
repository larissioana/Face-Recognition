import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family: 'Courier New', Courier, monospace;
    overflow-x:hidden;
    background:linear-gradient(89deg, #9D94FF 0%, #FFCC8A 100%);
}
button{
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
}
`;

