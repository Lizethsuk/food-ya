import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/themeContext';
import { UserProvider } from './context/userContext';
import { MenuManageProvider } from './context/menuManageContext';
import { InvoiceProvider } from './context/invoiceContext';

ReactDOM.render(
  <React.StrictMode>
    <InvoiceProvider>
      <MenuManageProvider>
        <UserProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </UserProvider>
      </MenuManageProvider>
    </InvoiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
