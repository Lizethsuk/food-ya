import PropTypes from 'prop-types';
import { Row, Col, Dropdown } from 'react-bootstrap/';
import { FaFileInvoice } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { OrderCardContainer } from './style';

function OrderCard({
  restaurantName,
  email,
  orderNumber,
  orderId,
  buyDate,
  deliveryType,
  totalPayment,
  theme,
  callback
}) {
  return (
    <OrderCardContainer
      className={theme}
      onClick={() => {
        callback(orderId);
      }}>
      <Row>
        <Col xs={5} className="subcontainer">
          <div className="icon-container">
            <FaFileInvoice />
          </div>

          <div className="order-container">
            <p className="card-text card-title">{`Orden #${orderNumber}`}</p>
            <p className="card-text">{`Monto Total S/ ${totalPayment}`}</p>
          </div>
        </Col>
        <Col xs={4}>
          {email !== 'defaultEmail@default.com' && <p className="card-text card-title">{email}</p>}
        </Col>
        <Col xs={3}>
          <p className="card-text card-title">{restaurantName}</p>
        </Col>
      </Row>
      <Dropdown.Divider />
      <Row>
        <Col xs={9} className="subcontainer">
          <div className="icon-container bottom">
            <MdDeliveryDining />
          </div>

          <p className="card-text">{deliveryType}</p>
        </Col>
        <Col xs={3}>
          <p className="card-text">{buyDate}</p>
          <p className="card-text">Fecha de compra</p>
        </Col>
      </Row>
    </OrderCardContainer>
  );
}
OrderCard.propTypes = {
  restaurantName: PropTypes.string,
  email: PropTypes.string,
  orderId: PropTypes.string,
  orderNumber: PropTypes.string,
  buyDate: PropTypes.string,
  deliveryType: PropTypes.string,
  totalPayment: PropTypes.number,
  theme: PropTypes.string,
  callback: PropTypes.func
};

OrderCard.defaultProps = {
  restaurantName: 'Default Restaurant Name',
  email: 'defaultEmail@default.com',
  orderId: 'Default Order Id',
  orderNumber: 'Default Order Number',
  buyDate: 'Default Buy Date',
  deliveryType: 'Default Delivery Type',
  totalPayment: 0,
  theme: 'light',
  callback: null
};

export default OrderCard;
