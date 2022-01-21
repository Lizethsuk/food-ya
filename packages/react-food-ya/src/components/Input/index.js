import React from "react";
import "./style.scss";

const Input = ({ name, type, label, placeholder, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-content"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
