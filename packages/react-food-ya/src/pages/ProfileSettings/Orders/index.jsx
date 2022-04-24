import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvoiceContext } from '../../../context/invoiceContext';
import { ThemeContext } from '../../../context/themeContext';
import OrderCard from './OrderCard';

function Orders() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const {
    // InitializeInvoiceList,
    invoices,
    setInvoices
  } = useContext(InvoiceContext);
  const [isLoading, setIsLoading] = useState(true);

  const getOrders = async () => {
    const response = await fetch('http://localhost:3001/api/order/client', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const responsejson = await response.json();
    setInvoices(responsejson);
    console.log(responsejson);
  };

  useEffect(() => {
    setIsLoading(true);
    // InitializeInvoiceList();
    getOrders();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [invoices]);

  const RedirectTo = (orderNumber) => {
    navigate(`/profile/orders/${orderNumber}`);
  };

  const ParseDate = (day, month, year) => {
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      {isLoading && <p>Is Loading..</p>}
      {!isLoading &&
        invoices.order?.length > 0 &&
        invoices.order?.map((invoice) => (
          <div key={invoice.id}>
            <OrderCard
              // restaurantName={invoice.restaurant.name}
              // restaurantType={invoice.restaurant.type}
              orderNumber={invoice.orderNumber}
              buyDate={ParseDate(invoice.day, invoice.month, invoice.year)}
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
