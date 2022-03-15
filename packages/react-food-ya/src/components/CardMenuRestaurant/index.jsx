import React from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import './style.scss';

function CardMenuRestaurant({
  img, name, price, description,
}) {
  return (
    <Col xl={4} lg={6} md={6} sm={6}>
      <div className="cardMenuRes">
        <div className="div-img">
          <img className="imgAvatar" src={img} alt="" />
        </div>
        <div className="content-div">
          <h2>{name}</h2>
          <div className="div-description">

            <h3>
              S/
              {' '}
              {price}
            </h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="divBtn" />
      </div>
    </Col>
  );
}

CardMenuRestaurant.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

CardMenuRestaurant.defaultProps = {
  img: 'Default Image',
  name: 'Default Name',
  price: '0',
  description: 'Default Description',
};

export default CardMenuRestaurant;
