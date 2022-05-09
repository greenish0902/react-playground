import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 120px 0;
    padding: 0;
    box-sizing: border-box;
    margin: auto;
    max-width: 720px;
  }
  body {
    background-color: #fff;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  label {
    font-weight: bold;
  }
  button {
    font-weight: bold;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  .hidden {
    display: none;
  }
  .smallBox {
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #eee;
  }
`;

export default GlobalStyle;
