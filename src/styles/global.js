import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root{
    --page-primary: #1a1a1a;
    --page-primary-light:#212121;
    --page-secondary:rgba(51, 49, 56, 0.70);
    --text-primary:rgba(250, 250, 250, 0.75);
    --text-secondary:rgba(250, 250, 250, 0.4);
    --green-primary:rgba(0, 191, 166,0.87);
    --green-secondary:rgba(0, 191, 166,0.2);
  }
  body {
    font-family:'Roboto';
    margin: 0;
    padding: 0;
    color: var(--text-primary);
  }
`;
