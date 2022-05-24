import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: auto;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
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
