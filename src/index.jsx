import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { GoogleAuthProvider } from './providers/authentication.provider';

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleAuthProvider>
  </React.StrictMode>,
document.getElementById('root')
);
