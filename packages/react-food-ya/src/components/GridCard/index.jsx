import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton';

function GridCard({
  img, name, type, stars,
}) {
  // const { contact } = props;
  return (
    <li className="card">
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
      </div>
      <CustomButton
        buttonStyle="fit-content-button margin-top"
        content="Ir a Restaurante"
        url="/restaurant"
      />
    </li>
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
