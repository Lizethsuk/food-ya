/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'react-bootstrap/';
import { motion } from 'framer-motion';
import CustomSimpleButton from '../../../components/CustomSimpleButton';
import { OrderCard, TotalContainer } from '../../DishesManager/style';
import { OrderCardContainer, ButtonContainer, DeliveryContainer, PaymentContainer } from './style';

function CheckoutSteps({ page, selectedMenu, GetTotal, setPage }) {
  return (
    <form>
      {page === 0 && (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 1 }}>
          <h2>Checkout Order</h2>
          <OrderCardContainer>
            {selectedMenu.map((item) => (
              <OrderCard className="checkout" key={item.id}>
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

          <TotalContainer className="checkout">Total: S/ {GetTotal()}</TotalContainer>
          <ButtonContainer>
            <CustomSimpleButton
              disabled={false}
              content={<>Continue to delivery</>}
              buttonStyle="fit-content center content"
              callback={() => {
                setPage(1);
              }}
            />
          </ButtonContainer>
        </motion.div>
      )}
      {page === 1 && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 1 }}>
          <h2>Delivery</h2>
          <DeliveryContainer>AAAA</DeliveryContainer>
          <ButtonContainer>
            <CustomSimpleButton
              disabled={false}
              content={<>Return to Checkout</>}
              buttonStyle="fit-content center content"
              callback={() => {
                setPage(0);
              }}
            />
            <CustomSimpleButton
              disabled={false}
              content={<>Continue to payment</>}
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
  setPage: PropTypes.func
};

CheckoutSteps.defaultProps = {
  page: 0,
  selectedMenu: [],
  GetTotal: null,
  setPage: null
};

export default CheckoutSteps;
