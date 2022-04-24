/* eslint-disable react/forbid-prop-types */
import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CustomButton from '../../../components/CustomButton';
import { OrderCard, TotalContainer, OffCanvasTitle } from '../style';
import { ThemeContext } from '../../../context/themeContext';

function PaymentModal({ show, handleClose, selectedMenu, GetTotal, SaveData }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <OffCanvasTitle>Pedidos</OffCanvasTitle>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {selectedMenu.map((item) => (
          <OrderCard key={item.id} className={theme}>
            <div className="div-img">
              <img className="imgAvatar" src={item.img} alt="" />
            </div>
            <div className="mid-container">x {item.value}</div>
            <div className="div-description">
              <h2 className="card-title">{item.name}</h2>
              <ul className="ulStars">
                <li className="star">{' ★ '.repeat(item.points)}</li>
              </ul>
              <h3 className="card-price">S/ {item.price}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </OrderCard>
        ))}
        <TotalContainer>Total: S/ {GetTotal()}</TotalContainer>
        <CustomButton
          content="A pagar"
          buttonStyle="full-button"
          url="/payment"
          callback={SaveData}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

PaymentModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  selectedMenu: PropTypes.array,
  GetTotal: PropTypes.func,
  SaveData: PropTypes.func
};

PaymentModal.defaultProps = {
  show: false,
  handleClose: null,
  selectedMenu: [],
  GetTotal: null,
  SaveData: null
};

export default PaymentModal;
