import PropTypes from 'prop-types';
import { Row, Col, Dropdown } from 'react-bootstrap/';
import { FaFileInvoice } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { OrderCardContainer } from './style';

function OrderCard({
  documentType,
  restaurantName,
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
        <Col xs={6} className="subcontainer">
          <div className="icon-container">
            <FaFileInvoice />
          </div>

          <div>
            <p className="card-text card-title">{`Orden #${orderNumber}`}</p>
            <p className="card-text">{`Monto Total S/ ${totalPayment}`}</p>
          </div>
        </Col>
        <Col xs={4}>
          <p className="card-text card-title">{documentType}</p>
          <p className="card-text">Medio de Pago</p>
        </Col>
        <Col xs={2}>
          <p className="card-text card-title">{restaurantName}</p>
        </Col>
      </Row>
      <Dropdown.Divider />
      <Row>
        <Col xs={10} className="subcontainer">
          <div className="icon-container bottom">
            <MdDeliveryDining />
          </div>

          <p className="card-text">{deliveryType}</p>
        </Col>
        <Col xs={2}>
          <p className="card-text">{buyDate}</p>
          <p className="card-text">Fecha de compra</p>
        </Col>
      </Row>
    </OrderCardContainer>
  );
}
OrderCard.propTypes = {
  documentType: PropTypes.string,
  restaurantName: PropTypes.string,
  orderId: PropTypes.string,
  orderNumber: PropTypes.string,
  buyDate: PropTypes.string,
  deliveryType: PropTypes.string,
  totalPayment: PropTypes.number,
  theme: PropTypes.string,
  callback: PropTypes.func
};

OrderCard.defaultProps = {
  documentType: 'Default Document Type',
  restaurantName: 'Default Restaurant Name',
  orderId: 'Default Order Id',
  orderNumber: 'Default Order Number',
  buyDate: 'Default Buy Date',
  deliveryType: 'Default Delivery Type',
  totalPayment: 0,
  theme: 'light',
  callback: null
};

export default OrderCard;
