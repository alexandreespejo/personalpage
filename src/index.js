import React from 'react';
import { GlobalStyle } from './globalStyle';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
