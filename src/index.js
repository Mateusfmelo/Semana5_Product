import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Product from './components/Products/Product'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Product></Product>  
  </React.StrictMode>
);
