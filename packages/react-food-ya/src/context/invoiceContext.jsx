/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const InvoiceContext = createContext(undefined);

function InvoiceProvider(props) {
  const [invoice, setInvoice] = useState({});
  const [invoices, setInvoices] = useState([]);
  const [restaurant, setRestaurant] = useState({});

  const InitializeRestaurant = () => {
    if (localStorage.getItem('restaurantInfo') != null) {
      setRestaurant(JSON.parse(localStorage.getItem('restaurantInfo')));
    } else {
      localStorage.setItem('restaurantInfo', '{}');
      setRestaurant(JSON.parse(localStorage.getItem('restaurantInfo')));
    }
  };

  const saveRestaurant = (restaurantInfo) => {
    localStorage.setItem('restaurantInfo', JSON.stringify(restaurantInfo));
    setRestaurant(restaurantInfo);
  };

  const InitializeInvoice = () => {
    if (localStorage.getItem('invoice') != null) {
      setInvoice(JSON.parse(localStorage.getItem('invoice')));
    } else {
      localStorage.setItem('invoice', '{}');
      setInvoice(JSON.parse(localStorage.getItem('invoice')));
    }
  };

  const InitializeInvoiceList = () => {
    if (localStorage.getItem('invoices') != null) {
      console.log('AAAA');
      setInvoices(JSON.parse(localStorage.getItem('invoices')));
    } else {
      localStorage.setItem('invoices', '[]');
      setInvoices(JSON.parse(localStorage.getItem('invoices')));
    }
  };

  const InvoiceSaved = (invoiceInfo) => {
    localStorage.setItem('invoice', JSON.stringify(invoiceInfo));
    let invoicesList = [];
    if (localStorage.getItem('invoices') != null) {
      invoicesList = JSON.parse(localStorage.getItem('invoices'));
    }
    invoicesList = [invoiceInfo, ...invoicesList];
    localStorage.setItem('invoices', JSON.stringify(invoicesList));
    setInvoice(invoiceInfo);
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        setInvoice,
        invoices,
        setInvoices,
        InitializeInvoice,
        InvoiceSaved,
        InitializeInvoiceList,
        restaurant,
        setRestaurant,
        InitializeRestaurant,
        saveRestaurant
      }}>
      {props.children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext, InvoiceProvider };
