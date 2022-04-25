/* eslint-disable react/no-array-index-key */
import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap/';
import { IoIosArrowBack } from 'react-icons/io';
import { IoStorefrontSharp } from 'react-icons/io5';
import { InvoiceContext } from '../../../../context/invoiceContext';
import { ThemeContext } from '../../../../context/themeContext';
import {
  SingleOrderContainer,
  SingleOrderInfoContainer,
  SingleOrderRetire,
  ProductsGrid
} from '../../../ProfileSettings/Orders/SingleOrder/style';
import OrderInfoSection from '../../../ProfileSettings/Orders/SingleOrder/OrderInfoSection';
import ProductCard from '../../../ProfileSettings/Orders/SingleOrder/ProductCard';
import { ParseDate } from '../../../../utils/parseDate';
import CONFIG from '../../../../utils/host';

function OrderDetails() {
  const { theme } = useContext(ThemeContext);
  const { setInvoiceById, invoiceById } = useContext(InvoiceContext);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getOrder = async () => {
    const response = await fetch(`${CONFIG.url}/api/order/get/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const responsejson = await response.json();
    setInvoiceById(responsejson);
    console.log(responsejson);
  };

  useEffect(() => {
    setIsLoading(true);
    // InitializeInvoiceById(id);
    getOrder();
  }, []);

  useEffect(() => {
    if (invoiceById) {
      setIsLoading(false);
    }
  }, [invoiceById]);

  const Redirect = () => {
    const tempLocation = '/restaurant-profile';
    navigate(`${tempLocation}/orders`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {isLoading && <p>Is Loading..</p>}
      {!isLoading && (
        <SingleOrderContainer className={theme}>
          <Container>
            <Row>
              <Col xs={4}>
                <div className="order-info">
                  <button
                    type="button"
                    onClick={() => {
                      Redirect();
                    }}
                    className="icon">
                    <IoIosArrowBack />
                  </button>
                  <div>
                    <p className="text bottom title">{`Orden ${invoiceById.orderNumber}`}</p>

                    <OrderInfoSection
                      title={`Total pagado `}
                      content={`S/: ${invoiceById.totalPayment}`}
                    />
                  </div>
                </div>
                <Dropdown.Divider />
                <SingleOrderRetire className={`order-number-description ${theme}`}>
                  <div className="texticon">
                    <div className="icon">
                      <IoStorefrontSharp />
                    </div>
                    <p className="text">Pedido</p>
                  </div>
                  <p className="text title600">
                    {invoiceById.products?.length}{' '}
                    {invoiceById.products?.length > 1 ? 'productos' : 'producto'}
                  </p>
                </SingleOrderRetire>
              </Col>
              <Col xs={8}>
                <SingleOrderInfoContainer className={theme}>
                  <p className="text extra-bottom title">Seguimiento de la orden</p>
                  <OrderInfoSection
                    title={`Fecha y hora de pedido: `}
                    content={ParseDate(invoiceById.day, invoiceById.month, invoiceById.year)}
                  />
                  <OrderInfoSection
                    title={`Cliente: `}
                    content={`${invoiceById.clientID?.name} ${invoiceById.clientID?.surname}`}
                  />
                  <OrderInfoSection
                    title={`Tipo de entrega: `}
                    content={invoiceById.deliveryType}
                  />
                  <Dropdown.Divider />
                  <p className="text extra-bottom title">Productos</p>

                  <ProductsGrid>
                    {invoiceById.products?.map((product, index) => {
                      return <ProductCard key={index} product={product} index={index} />;
                    })}
                  </ProductsGrid>
                </SingleOrderInfoContainer>
              </Col>
            </Row>
          </Container>
        </SingleOrderContainer>
      )}
    </motion.div>
  );
}

export default OrderDetails;
