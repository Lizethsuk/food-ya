import React from "react";
import CustomButton from "../CustomButton";

function GridCard(props) {
  const contact = props.contact;
  return (
    <li className="card">
      <div className="div-img">
        <img className="imgAvatar" alt="" src={contact.img.url} />
      </div>
      <div className="content-div">
        <h2>{contact.name}</h2>
        <div className="div-type-start">
          <span>{contact.type}</span>
          <ul className="ulStars">
            <li className="star">{" ★ ".repeat(contact.stars)}</li>
          </ul>
        </div>
      </div>
      <CustomButton
        buttonStyle={"fit-content-button margin-top"}
        content={"Ir a Restaurante"}
        url={"/restaurant"}
      />
    </li>
  );
}
export default GridCard;
