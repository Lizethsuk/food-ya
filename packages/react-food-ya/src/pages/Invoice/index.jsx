/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from 'react';
import CustomButton from '../../components/CustomButton';
import { UserContext } from '../../context/userContext';
import { ThemeContext } from '../../context/themeContext';
import { InvoiceContext } from '../../context/invoiceContext';
import { InvoiceContentContainer, InvoiceContainer } from './style';
import InvoiceSection from './InvoiceSection';

function Invoice() {
  const [invoiceInfo, setInvoiceInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { invoice, InitializeInvoice } = useContext(InvoiceContext);

  useEffect(() => {
    setIsLoading(true);
    InitializeInvoice();
  }, []);

  const parseCardNumberFormat = (cardNumber) => {
    const cardNumberStr = cardNumber.toString();
    let newFormat = '';
    for (let i = 0; i < 3; i += 1) {
      newFormat += `${'*'.repeat(4)} `;
    }
    newFormat += cardNumberStr.substr(cardNumberStr.length - 5);
    return newFormat;
  };

  useEffect(() => {
    if (Object.keys(invoice).length > 0) {
      const InvoiceToShow = [
        { title: 'Documento Tributario', content: 'Boleta' },
        { title: 'Medio de pago', content: invoice.cardType },
        {
          title: 'Número de tarjeta',
          content: parseCardNumberFormat(invoice.cardNumber)
        },
        { title: 'Nombre de restaurante', content: invoice.restaurant.name },
        { title: 'Tipo de restaurante', content: invoice.restaurant.type },
        { title: 'Total pagado', content: `S/ ${invoice.totalPayment}` }
      ];

      setInvoiceInfo(InvoiceToShow);
    }
    setIsLoading(false);
  }, [invoice]);

  return (
    <InvoiceContentContainer>
      {isLoading && invoiceInfo <= 0 && <p>Loading...</p>}
      {!isLoading && invoiceInfo.length > 0 && (
        <InvoiceContainer className={`${theme}`}>
          <h2 className="invoice-title">Información de Facturación</h2>

          {invoiceInfo.map((invoiceElement, index) => (
            <InvoiceSection
              key={index}
              title={invoiceElement.title}
              content={invoiceElement.content}
            />
          ))}

          <CustomButton
            buttonStyle="fit-content-button"
            content="Go back home"
            url={!user.token ? '/' : '/home'}
          />
        </InvoiceContainer>
      )}
    </InvoiceContentContainer>
  );
}

export default Invoice;
