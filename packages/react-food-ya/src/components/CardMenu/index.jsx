import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MenuManageContext } from '../../context/menuManageContext';
import { CardMenuContainer } from './style';

function CardMenu({ img, name, price, description, value, points }) {
  const { AddToMenu, RemoveFromMenu } = useContext(MenuManageContext);

  return (
    <Col xl={4} lg={6} md={6} sm={6}>
      <CardMenuContainer>
        <div className="div-img">
          <img className="imgAvatar" src={img} alt="" />
        </div>
        <div className="content-div">
          <h2>{name}</h2>
          <div className="div-description">
            <ul className="ulStars">
              <li className="star">{' ★ '.repeat(points)}</li>
            </ul>
            <h3>S/ {price}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="divBtn">
          <Button onClick={() => AddToMenu(name)}>
            <FaPlusCircle className="btnPlus" />
          </Button>
          <p>{value}</p>
          <Button onClick={() => RemoveFromMenu(name)}>
            <FaMinusCircle className="btnPlus" />
          </Button>
        </div>
      </CardMenuContainer>
    </Col>
  );
}

CardMenu.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  points: PropTypes.number
};

CardMenu.defaultProps = {
  img: 'Default Image',
  name: 'Default Name',
  price: 's./ 10',
  description: 'Default Description',
  value: 0,
  points: 1
};

export default CardMenu;
