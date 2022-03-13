/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import CustomButton from '../CustomButton';
import './style.scss';
import { ThemeContext } from '../../context/themeContext';

function GridCard({ img, name, type, stars, isLogin, id }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {!isLogin && (
        <Col lg={4} md={6}>
          <li className={`cardGrid ${theme}`}>
            <div className="div-img">
              <img className="imgAvatar" alt="" src={img} />
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
                url="/sign-in-selection"
              />
            </div>
          </li>
        </Col>
      )}
      {isLogin && (
        <Col lg={4} md={6}>
          <li className={`cardGrid ${theme}`}>
            <div className="div-img">
              <img className="imgAvatar" alt="" src={img} />
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
                isLogin
                id={id}
              />
            </div>
          </li>
        </Col>
      )}
    </>
  );
}

GridCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  stars: PropTypes.number,
  isLogin: PropTypes.bool,
  id: PropTypes.string
};

GridCard.defaultProps = {
  img: 'Default Image',
  name: 'Default name',
  type: 'Default Type',
  stars: 2,
  isLogin: false,
  id: '0'
};

export default GridCard;
