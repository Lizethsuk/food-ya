/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, ButtonGroup, ToggleButton } from 'react-bootstrap/';
import { motion } from 'framer-motion';
import { AiFillDelete } from "react-icons/ai";
import { FiShoppingCart } from 'react-icons/fi';
import CustomSimpleButton from '../../../components/CustomSimpleButton';
import { OrderCard, TotalContainer } from '../../DishesManager/style';
import { OrderCardContainer, EmptyShoppingCart, ButtonContainer, DeliveryContainer, PaymentContainer } from './style';
import CustomButton from '../../../components/CustomButton';

function CheckoutSteps({ page, selectedMenu, GetTotal, setPage, SetDeliveryPriceToTotal, RemoveFromOrder }) {
  const [deliveryTotal, setDeliveryPrice] = useState(0);
  const [radioValue, setRadioValue] = useState('1');
  const deliveryTypes = [
    { name: 'Despacho a domicilio', value: '1' },
    { name: 'Recojo en tienda', value: '2' }
  ];

  useEffect(() => {
    switch (radioValue) {
      case '1':
        setDeliveryPrice(SetDeliveryPriceToTotal(15))
        break;
      case '2':
      default:
        setDeliveryPrice(SetDeliveryPriceToTotal(0))
        break;
    }
  }, [radioValue])

  return (
    <form>
      {page === 0 && (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 1 }}>
          <h2>Platillos seleccionados</h2>
          {
            selectedMenu.length > 0 && <>
              <OrderCardContainer>
                {
                  selectedMenu.map((item) => (
                    <OrderCard className="checkout" key={item.id}>
                      <button className="delete-button" type='button' onClick={() => { RemoveFromOrder(item.id) }}><AiFillDelete /></button>
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
                  ))
                }
              </OrderCardContainer>

              <TotalContainer className="checkout">Total: S/ {GetTotal()}</TotalContainer>
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
          }
          {
            selectedMenu.length <= 0 &&
            <EmptyShoppingCart>
              <div className="empty-shopping-cart">
                <FiShoppingCart />
                <p className='empty-shopping-content'>Tu Carro de Compras está vacío</p>
                <p className='empty-shopping-go-buy'>Agrega productos ahora</p>
                <CustomButton
                  buttonStyle="fit-content-button "
                  content="Ir a Restaurantes"
                  url="/home"
                />
              </div>
            </EmptyShoppingCart>
          }

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
                  // variant="option"
                  className={`btn-option ${(index + 1).toString() === radioValue ? 'selected' : ''
                    }`}
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}>
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>

            <div className="delivery-container">
              {
                radioValue === '1' &&
                <>
                  <h2>Delivery</h2>
                  <div>
                    <p>Añada su dirección</p>
                  </div>
                </>
              }
              {
                radioValue === '2' &&
                <>
                  <h2>Tienda</h2>
                  <div>
                    <p>El tiempo de pedido es de </p>
                  </div>
                </>
              }
            </div>
          </DeliveryContainer>

          <TotalContainer className="checkout">Total: S/ {deliveryTotal}</TotalContainer>

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
          <h2>Payment Type</h2>
          <PaymentContainer>
            <Container>
              <Row>
                <Col>
                  <h3>Billing Address</h3>
                  <Form.Group className="mb-3" controlId="form-name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Aldhair Vera Camacho" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="form-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@mail.com" />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </PaymentContainer>
          <ButtonContainer>
            <CustomSimpleButton
              disabled={false}
              content={<>Page1</>}
              buttonStyle="fit-content center content"
              callback={() => {
                setPage(1);
              }}
            />
          </ButtonContainer>
        </motion.div>
      )}
    </form>
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
