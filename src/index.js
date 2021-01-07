import React from 'react';
import { GlobalStyle } from './styles/global';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
