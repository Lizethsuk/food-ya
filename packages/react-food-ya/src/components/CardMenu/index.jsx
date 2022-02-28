import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import './style.scss';
import { Button } from 'react-bootstrap';
import { MenuManageContext } from '../../context/menuManageContext';

function CardMenu({
  img, name, price, description, value,
}) {
  const { AddToMenu, RemoveFromMenu } = useContext(MenuManageContext);

  return (
    <Col xl={4} lg={6} md={6} sm={6}>
      <div className="cardMenu">
        <div className="div-img">
          <img className="imgAvatar" src={img} alt="" />
        </div>
        <div className="content-div">
          <h2>{name}</h2>
          <div className="div-description">
            <h3>{price}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="divBtn">
          <Button onClick={() => AddToMenu(name)}>
            <FaPlusCircle className="btnPlus" />
          </Button>
          <p>
            {value}
          </p>
          <Button onClick={() => RemoveFromMenu(name)}>
            <FaMinusCircle className="btnPlus" />
          </Button>
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
  value: PropTypes.number,
};

CardMenu.defaultProps = {
  img: 'Default Image',
  name: 'Default Name',
  price: 's./ 10',
  description: 'Default Description',
  value: 0,
};

export default CardMenu;
