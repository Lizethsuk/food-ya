import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Input({ name, type, label, placeholder, onChange }) {
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
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  name: 'Default Image',
  type: 'Default Name',
  label: 's./ 10',
  placeholder: ' ',
  onChange: null
};

export default Input;
