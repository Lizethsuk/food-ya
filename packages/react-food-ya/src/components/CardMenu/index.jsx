import React from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import './style.scss';

function CardMenu({
  img, name, price, description,
}) {
  return (
    <Col xl={4} lg={6} md={6} sm={6}>
      <div className="cardMenu">
        <div className="div-img">
          <img className="imgAvatar" src={img.url} alt="" />
        </div>
        <div className="content-div">
          <h2>{name}</h2>
          <div className="div-description">
            <h3>{price}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="divBtn">
          <a href="$">
            <FaPlusCircle className="btnPlus" />
          </a>
        </div>
      </div>
    </Col>
  );
}

CardMenu.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

CardMenu.defaultProps = {
  img: 'Default Image',
  name: 'Default Name',
  price: 's./ 10',
  description: 'Default Description',
};

export default CardMenu;
