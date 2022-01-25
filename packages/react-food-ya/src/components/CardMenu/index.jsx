import React from 'react';

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

export default CardMenu;
