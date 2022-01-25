import React from 'react';
import PropTypes from 'prop-types';

function CardMenu({
  img, name, price, description,
}) {
  return (
    <li className="card">
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
        <a className="btnPlus" href="$">
          {' '}
          +
          {' '}
        </a>
      </div>
    </li>
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
