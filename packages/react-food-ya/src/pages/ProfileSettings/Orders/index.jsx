import { useState, useEffect, useContext } from 'react';
import { InvoiceContext } from '../../../context/invoiceContext';
import { ThemeContext } from '../../../context/themeContext';
import OrderCard from '../OrderCard';

function Orders() {
  const { theme } = useContext(ThemeContext);
  const { InitializeInvoiceList, invoices } = useContext(InvoiceContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    InitializeInvoiceList();
  }, []);

  useEffect(() => {
    if (invoices.length > 0) {
      setIsLoading(false);
    }
  }, [invoices]);

  return (
    <>
      {isLoading && <p>Is Loading..</p>}
      {!isLoading &&
        invoices.map((invoice) => (
          <div key={invoice.id}>
            <OrderCard
              restaurantName={invoice.restaurant.name}
              restaurantType={invoice.restaurant.type}
              orderNumber={invoice.orderNumber}
              buyDate={invoice.cardExpirationDate}
              deliveryType={invoice.deliveryType}
              documentType={invoice.documentType}
              totalPayment={invoice.totalPayment}
              theme={theme}
            />
          </div>
        ))}
    </>
  );
}

export default Orders;
