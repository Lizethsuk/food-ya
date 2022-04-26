/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/forbid-prop-types */
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, ButtonGroup, ToggleButton } from 'react-bootstrap/';
import { motion } from 'framer-motion';
import { AiFillDelete } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { Formik, ErrorMessage } from 'formik';
import { format } from 'date-fns';
import { io } from 'socket.io-client';
import CustomSimpleButton from '../../../components/CustomSimpleButton';
import { OrderCard, TotalContainer } from '../../DishesManager/style';
import {
  OrderCardContainer,
  EmptyShoppingCart,
  ButtonContainer,
  DeliveryContainer,
  PaymentContainer
} from './style';
import CustomButton from '../../../components/CustomButton';
import { ThemeContext } from '../../../context/themeContext';
import { InvoiceContext } from '../../../context/invoiceContext';
import { MenuManageContext } from '../../../context/menuManageContext';
import { orderNumber } from '../../../utils/orderNumberGenerator';
import CONFIG from '../../../utils/host';

function CheckoutSteps({
  page,
  selectedMenu,
  GetTotal,
  setPage,
  SetDeliveryPriceToTotal,
  RemoveFromOrder
}) {
  const { theme } = useContext(ThemeContext);
  const { InvoiceSaved, restaurant, InitializeRestaurant } = useContext(InvoiceContext);
  const { clearOrder } = useContext(MenuManageContext);
  const [deliveryTotal, setDeliveryPrice] = useState(0);
  const [radioValue, setRadioValue] = useState('1');
  const navigate = useNavigate();
  const deliveryTypes = [
    { name: 'Despacho a domicilio', value: '1' },
    { name: 'Recojo en tienda', value: '2' }
  ];
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    InitializeRestaurant();
  }, []);

  useEffect(() => {
    switch (radioValue) {
      case '1':
        setDeliveryPrice(SetDeliveryPriceToTotal(15));
        break;
      case '2':
      default:
        setDeliveryPrice(SetDeliveryPriceToTotal(0));
        break;
    }
  }, [radioValue]);

  const submitOrder = async (values) => {
    const response = await fetch(`${CONFIG.url}/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ ...values })
    });
    const responsejson = await response.json();
    console.log(responsejson);
  };

  return (
    <Formik
      initialValues={{
        cardName: '',
        cardNumber: '',
        cardMonth: 'default',
        cardYear: 'default',
        cardCVV: '',
        cardDocType: 'default',
        cardDocNumber: '',
        cardType: '',
        documentType: 'default',
        cardExpirationDate: `${format(new Date(), 'dd/MM/yyyy HH:mm')}`
      }}
      validate={(values) => {
        const errors = {};

        if (!values.documentType || values.documentType === 'default')
          errors.documentType = 'Por favor ingresa un tipo de documento';

        if (!values.cardName) errors.cardName = 'Porfavor ingresa el nombre que muestra la tarjeta';
        else if (/^[a-zA-ZÀ-ÿ\s]{1-40}$/.test(values.cardName))
          errors.cardName = 'El nombre solo puede contener letras y espacios';

        if (!values.cardType) errors.cardType = 'Porfavor ingresa el tipo de tarjeta';
        else if (/^[a-zA-ZÀ-ÿ\s]{1-40}$/.test(values.cardType))
          errors.cardType = 'El tipo sólo puede contener letras';

        if (!values.cardNumber)
          errors.cardNumber = 'Porfavor ingresa el número que muestra la tarjeta';
        else if (!/^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/.test(values.cardNumber))
          errors.cardNumber = 'El número de tarjeta no es válido';

        if (!values.cardMonth || values.cardMonth === 'default')
          errors.cardMonth = 'Por favor ingresa el mes de expiración de tu tarjeta';

        if (!values.cardYear || values.cardYear === 'default')
          errors.cardYear = 'Por favor ingresa el año de expiración de tu tarjeta';

        if (!values.cardCVV) errors.cardCVV = 'Porfavor ingresa el CVV de tu tarjeta';
        else if (!/^[0-9]{3}$/.test(values.cardCVV))
          errors.cardCVV = 'El CVV sólo debe tener 3 dígitos';

        if (!values.cardDocType || values.cardDocType === 'default')
          errors.cardDocType = 'Por favor ingresa el tipo de documento';

        if (!values.cardDocNumber)
          errors.cardDocNumber = 'Por favor ingresa el número de documento';

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        setFormSent(true);
        resetForm();

        const orderNumberConst = orderNumber();

        const productsForServer = selectedMenu.map((product) => ({
          id: product.id,
          value: product.value,
          name: product.name,
          img: product.img,
          price: product.price,
          description: product.description
        }));

        const invoiceValues = {
          ...values,
          restaurant,
          orderNumber: orderNumberConst,
          deliveryType: radioValue === '2' ? 'Recojo en tienda' : 'Despacho a domicilio',
          totalPayment: deliveryTotal,
          products: selectedMenu
        };

        const orderForServer = {
          orderNumber: orderNumberConst,
          restaurantID: restaurant.id,
          restaurantName: restaurant.name,
          deliveryType: radioValue === '2' ? 'Recojo en tienda' : 'Despacho a domicilio',
          totalPayment: deliveryTotal,
          products: [...productsForServer]
        };
        const socket = io(CONFIG.url);
        socket.emit('Pedido', { idrestaurant: restaurant.id });
        InvoiceSaved(invoiceValues);
        submitOrder({ ...orderForServer });
        setTimeout(() => {
          setFormSent(false);
          clearOrder();
          navigate('/payment-message');
        }, 100);
      }}>
      {({ values, errors, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          {page === 0 && (
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
              transition={{ duration: 1 }}>
              <h2>Platillos seleccionados</h2>
              {selectedMenu.length > 0 && (
                <>
                  <OrderCardContainer>
                    {selectedMenu.map((item) => (
                      <OrderCard className={`checkout ${theme}`} key={item.id}>
                        <button
                          className="delete-button"
                          type="button"
                          onClick={() => {
                            RemoveFromOrder(item.id);
                          }}>
                          <AiFillDelete />
                        </button>
                        <div className="div-img">
                          <img className="imgAvatar" src={item.img} alt="" />
                        </div>
                        <div className="div-description">
                          <h2 className="card-title">{item.name}</h2>
                          <ul className="ulStars">
                            <li className="star">{' ★ '.repeat(item.points)}</li>
                          </ul>
                          <h3 className="card-price">S/ {item.price}</h3>
                          <p className="card-description">{item.description}</p>
                          <h3 className="card-value">Cantidad x {item.value}</h3>
                        </div>
                      </OrderCard>
                    ))}
                  </OrderCardContainer>

                  <TotalContainer className={`checkout ${theme}`}>
                    Total: S/ {GetTotal()}
                  </TotalContainer>
                  <ButtonContainer>
                    <CustomSimpleButton
                      disabled={false}
                      content={<>Pagar</>}
                      buttonStyle="fit-content center content"
                      callback={() => {
                        setPage(1);
                      }}
                    />
                  </ButtonContainer>
                </>
              )}
              {selectedMenu.length <= 0 && (
                <EmptyShoppingCart>
                  <div className="empty-shopping-cart">
                    <FiShoppingCart />
                    <p className="empty-shopping-content">Tu Carro de Compras está vacío</p>
                    <p className="empty-shopping-go-buy">Agrega productos ahora</p>
                    <CustomButton
                      buttonStyle="fit-content-button "
                      content="Ir a Restaurantes"
                      url="/home"
                    />
                  </div>
                </EmptyShoppingCart>
              )}
            </motion.div>
          )}
          {page === 1 && (
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
              transition={{ duration: 1 }}>
              <h2>Selecciona un tipo de entrega</h2>
              <DeliveryContainer>
                <ButtonGroup>
                  {deliveryTypes.map((radio, index) => (
                    <ToggleButton
                      key={index}
                      id={`radio-${index}`}
                      type="radio"
                      name="radio"
                      className={`btn-option 
                      ${(index + 1).toString() === radioValue ? 'selected' : ''}`}
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}>
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>

                <div className="delivery-container">
                  {radioValue === '1' && (
                    <>
                      <h2>Delivery</h2>
                      <div>
                        <p>Añada su dirección</p>
                        <p>Recargo por delivery: S/ 15</p>
                      </div>
                    </>
                  )}
                  {radioValue === '2' && (
                    <>
                      <h2>Tienda</h2>
                      <div>
                        <p>El tiempo de pedido es de </p>
                      </div>
                    </>
                  )}
                </div>
              </DeliveryContainer>

              <TotalContainer className={`checkout ${theme}`}>
                Total: S/ {deliveryTotal}
              </TotalContainer>

              <ButtonContainer>
                <CustomSimpleButton
                  disabled={false}
                  content={<>Volver</>}
                  buttonStyle="fit-content center content"
                  callback={() => {
                    setPage(0);
                  }}
                />
                <CustomSimpleButton
                  disabled={false}
                  content={<>Pagar</>}
                  buttonStyle="fit-content center content"
                  callback={() => {
                    setPage(2);
                  }}
                />
              </ButtonContainer>
            </motion.div>
          )}
          {page === 2 && (
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              exit={{ x: 0 }}
              transition={{ duration: 1 }}>
              <h2>Método de Pago</h2>
              <PaymentContainer>
                <Container>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="form-documentType">
                        <Form.Label>Tipo de documento</Form.Label>
                        <Form.Select
                          name="documentType"
                          value={values.documentType}
                          onChange={handleChange}>
                          <option value="default" disabled hidden>
                            Tipo de documento
                          </option>
                          <option value="Boleta">Boleta</option>
                          <option value="Factura">Factura</option>
                        </Form.Select>
                        <ErrorMessage
                          name="documentType"
                          component={() => <div className="error">{errors.documentType}</div>}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="form-name">
                        <Form.Label>Nombre del titular</Form.Label>
                        <Form.Control
                          type="text"
                          name="cardName"
                          value={values.cardName}
                          onChange={handleChange}
                          placeholder="Nombre que muestra la tarjeta"
                        />
                        <ErrorMessage
                          name="cardName"
                          component={() => <div className="error">{errors.cardName}</div>}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="form-cardType">
                        <Form.Label>Tipo de tarjeta</Form.Label>
                        <Form.Control
                          type="text"
                          name="cardType"
                          value={values.cardType}
                          onChange={handleChange}
                          placeholder="Visa, Mastercard, etc"
                        />
                        <ErrorMessage
                          name="cardType"
                          component={() => <div className="error">{errors.cardType}</div>}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="form-card-number">
                        <Form.Label>Número de tarjeta</Form.Label>
                        <Form.Control
                          type="number"
                          name="cardNumber"
                          value={values.cardNumber}
                          onChange={handleChange}
                          placeholder="**** **** **** ****"
                        />
                        <ErrorMessage
                          name="cardNumber"
                          component={() => <div className="error">{errors.cardNumber}</div>}
                        />
                      </Form.Group>
                      <Row>
                        <Col sm={8}>
                          <Form.Group className="mb-3" controlId="form-expiration-date">
                            <Form.Label>Fecha de expiración de la tarjeta</Form.Label>
                            <Row>
                              <Col>
                                <Form.Select
                                  name="cardMonth"
                                  value={values.cardMonth}
                                  onChange={handleChange}>
                                  <option value="default" disabled hidden>
                                    Mes
                                  </option>
                                  <option value="01">Enero</option>
                                  <option value="02">Febrero</option>
                                  <option value="03">Marzo</option>
                                  <option value="04">Abril</option>
                                  <option value="05">Mayo</option>
                                  <option value="06">Junio</option>
                                  <option value="07">Julio</option>
                                  <option value="08">Agosto</option>
                                  <option value="09">Septiembre</option>
                                  <option value="10">Octubre</option>
                                  <option value="11">Noviembre</option>
                                  <option value="12">Diciembre</option>
                                </Form.Select>
                                <ErrorMessage
                                  name="cardMonth"
                                  component={() => <div className="error">{errors.cardMonth}</div>}
                                />
                              </Col>
                              <Col>
                                <Form.Select
                                  name="cardYear"
                                  value={values.cardYear}
                                  onChange={handleChange}>
                                  <option value="default" disabled hidden>
                                    Año
                                  </option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>
                                  <option value="2028">2028</option>
                                  <option value="2029">2029</option>
                                  <option value="2030">2030</option>
                                </Form.Select>
                                <ErrorMessage
                                  name="cardYear"
                                  component={() => <div className="error">{errors.cardYear}</div>}
                                />
                              </Col>
                            </Row>
                          </Form.Group>
                        </Col>
                        <Col sm={4}>
                          <Form.Group className="mb-3" controlId="form-cvv">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                              type="number"
                              name="cardCVV"
                              value={values.cardCVV}
                              onChange={handleChange}
                              placeholder="Ingresa 3 dígitos"
                            />
                            <ErrorMessage
                              name="cardCVV"
                              component={() => <div className="error">{errors.cardCVV}</div>}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="form-identity-doc">
                            <Form.Label>Tipo de documento</Form.Label>
                            <Form.Select
                              name="cardDocType"
                              value={values.cardDocType}
                              onChange={handleChange}>
                              <option value="default" disabled hidden>
                                Tipo de documento
                              </option>
                              <option value="DNI">DNI del Titular de la Tarjeta</option>
                              <option value="CE">CE del Titular de la Tarjeta</option>
                              <option value="Pasaporte">Pasaporte del Titular de la Tarjeta</option>
                            </Form.Select>
                            <ErrorMessage
                              name="cardDocType"
                              component={() => <div className="error">{errors.cardDocType}</div>}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="form-document-number">
                            <Form.Label>Número de documento</Form.Label>
                            <Form.Control
                              type="number"
                              name="cardDocNumber"
                              value={values.cardDocNumber}
                              onChange={handleChange}
                              placeholder="72532918"
                            />
                            <ErrorMessage
                              name="cardDocNumber"
                              component={() => <div className="error">{errors.cardDocNumber}</div>}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      {formSent && <p className="success">Pago envíado</p>}
                    </Col>
                  </Row>
                </Container>
              </PaymentContainer>
              <ButtonContainer>
                <CustomSimpleButton
                  disabled={false}
                  content={<>Volver</>}
                  buttonStyle="fit-content center content"
                  callback={() => {
                    setPage(1);
                  }}
                />
                <CustomSimpleButton
                  disabled={false}
                  content={<>Aceptar</>}
                  buttonStyle="fit-content center content"
                  buttonType="submit"
                  callback={() => {
                    setPage(2);
                  }}
                />
              </ButtonContainer>
            </motion.div>
          )}
        </form>
      )}
    </Formik>
  );
}

CheckoutSteps.propTypes = {
  page: PropTypes.number,
  selectedMenu: PropTypes.array,
  GetTotal: PropTypes.func,
  setPage: PropTypes.func,
  SetDeliveryPriceToTotal: PropTypes.func,
  RemoveFromOrder: PropTypes.func
};

CheckoutSteps.defaultProps = {
  page: 0,
  selectedMenu: [],
  GetTotal: null,
  setPage: null,
  SetDeliveryPriceToTotal: null,
  RemoveFromOrder: null
};

export default CheckoutSteps;
