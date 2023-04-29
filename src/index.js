import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthContext';
import ProductProvider from './contexts/ProductContext';
import UsersProvider from './contexts/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <UsersProvider>
          <App />
        </UsersProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);

