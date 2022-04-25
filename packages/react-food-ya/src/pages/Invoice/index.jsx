/* eslint-disable react/no-array-index-key */
import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';
import CustomButton from '../../components/CustomButton';
import { UserContext } from '../../context/userContext';
import { ThemeContext } from '../../context/themeContext';
import { InvoiceContext } from '../../context/invoiceContext';
import { InvoiceContentContainer, InvoiceContainer } from './style';
import InvoiceSection from './InvoiceSection';
import CONFIG from '../../utils/host';

function Invoice() {
  const [invoiceInfo, setInvoiceInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { invoice, InitializeInvoice } = useContext(InvoiceContext);
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    InitializeInvoice();
    const socket = io(CONFIG.url);
    socket.emit('Pedido', { idrestaurant: localStorage.getItem('restaurantInfo').id });
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
        { title: 'Documento Tributario', content: invoice.documentType },
        { title: 'Medio de pago', content: invoice.cardType },
        {
          title: 'Número de tarjeta',
          content: parseCardNumberFormat(invoice.cardNumber)
        },
        { title: 'Nombre de restaurante', content: invoice.restaurant.name },
        { title: 'Tipo de restaurante', content: invoice.restaurant.type },
        { title: 'Total pagado', content: `S/ ${invoice.totalPayment}` }
      ];
      const orderToShow = [
        { title: 'Número de Orden', content: invoice.orderNumber },
        { title: 'Fecha de Orden', content: invoice.cardExpirationDate }
      ];
      setInvoiceInfo(InvoiceToShow);
      setOrderInfo(orderToShow);
    }
    setIsLoading(false);
  }, [invoice]);

  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: 1 }}>
      <InvoiceContentContainer>
        {isLoading && invoiceInfo <= 0 && <p>Loading...</p>}
        {!isLoading && invoiceInfo.length > 0 && (
          <>
            <InvoiceContainer className={`${theme}`}>
              <h2 className="invoice-title">¡Gracias por tu compra!</h2>
              <p className="invoice-subtitle">
                {' '}
                Recibirás una confirmación a través de un correo electrónico con el resumen de tu
                pedido{' '}
              </p>
              {orderInfo.map((invoiceElement, index) => (
                <InvoiceSection
                  key={index}
                  title={invoiceElement.title}
                  content={invoiceElement.content}
                />
              ))}
            </InvoiceContainer>

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
                content="Ir a inicio"
                url={!user.token ? '/' : '/home'}
              />
            </InvoiceContainer>
          </>
        )}
      </InvoiceContentContainer>
    </motion.div>
  );
}

export default Invoice;
