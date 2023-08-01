import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Store } from './Store';
import { Provider } from 'react-redux';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App tab='home' />
    </Provider>
  </React.StrictMode>
);
