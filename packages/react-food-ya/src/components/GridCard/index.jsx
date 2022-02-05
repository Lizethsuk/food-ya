import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import CustomButton from '../CustomButton';
import './style.scss';

function GridCard({
  img, name, type, stars,
}) {
  return (
    <Col lg={4} md={6}>
      <li className="cardGrid">
        <div className="div-img">
          <img className="imgAvatar" alt="" src={img.url} />
        </div>
        <div className="content-div">
          <h2>{name}</h2>
          <div className="div-type-start">
            <span>{type}</span>
            <ul className="ulStars">
              <li className="star">{' ★ '.repeat(stars)}</li>
            </ul>
          </div>
          <CustomButton
            buttonStyle="fit-content-button "
            content="Ir a Restaurante"
            url="/restaurant"
          />
        </div>

      </li>
    </Col>
  );
}

GridCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  stars: PropTypes.number,
};

GridCard.defaultProps = {
  img: 'Default Image',
  name: 'Default name',
  type: 'Default Type',
  stars: 2,
};

export default GridCard;
