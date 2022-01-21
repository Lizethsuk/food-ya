import React from "react";

function CardMenu(props) {
  const contact = props.contact;
  return (
    <li className="card">
      <div className="div-img">
        <img className="imgAvatar" src={contact.img.url} alt="" />
      </div>
      <div className="content-div">
        <h2>{contact.name}</h2>
        <div className="div-description">
          <h3>{contact.price}</h3>
          <p>{contact.description}</p>
        </div>
      </div>
      <div className="divBtn">
        <a className="btnPlus" href="">
          {" "}
          +{" "}
        </a>
      </div>
    </li>
  );
}
export default CardMenu;
