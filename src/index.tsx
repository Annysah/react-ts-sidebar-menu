import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyle }  from './styles/global';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
