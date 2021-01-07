import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root{
    --page-primary:rgb(26, 26, 26);
    --page-primary-light:#212121;
    --page-secondary:rgba(51, 49, 56, 0.70);
    --text-primary:rgba(250, 250, 250, 0.87);
    --text-secondary:#b3ab9a;
    --button-primary:rgba(0, 191, 166,0.87);
    --button-secondary:rgb(0, 210, 180);
  }
  body {
    font-family:sans-serif;
    margin: 0;
    padding: 0;
    color: whitesmoke;
  }
`;
