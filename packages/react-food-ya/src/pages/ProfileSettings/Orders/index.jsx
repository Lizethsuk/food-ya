import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvoiceContext } from '../../../context/invoiceContext';
import { ThemeContext } from '../../../context/themeContext';
import OrderCard from './OrderCard';

function Orders() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { InitializeInvoiceList, invoices } = useContext(InvoiceContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    InitializeInvoiceList();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [invoices]);

  const RedirectTo = (orderNumber) => {
    navigate(`/profile/orders/${orderNumber}`);
  };

  return (
    <>
      {isLoading && <p>Is Loading..</p>}
      {!isLoading &&
        invoices.length > 0 &&
        invoices.map((invoice) => (
          <div key={invoice.id}>
            <OrderCard
              restaurantName={invoice.restaurant.name}
              // restaurantType={invoice.restaurant.type}
              orderNumber={invoice.orderNumber}
              buyDate={invoice.cardExpirationDate}
              deliveryType={invoice.deliveryType}
              documentType={invoice.documentType}
              totalPayment={invoice.totalPayment}
              theme={theme}
              callback={RedirectTo}
            />
          </div>
        ))}
      {!isLoading && invoices.length === 0 && <p>No hay órdenes registradas</p>}
    </>
  );
}

export default Orders;
