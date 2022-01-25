import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton';
import './style.scss';

function RegisterOption({
  imgContent, text, content, url,
}) {
  return (
    <div className="register-option">
      <img className="register-img" src={imgContent} alt="A" />
      <p className="register-description">{text}</p>
      <CustomButton content={content} url={url} />
    </div>
  );
}

RegisterOption.propTypes = {
  imgContent: PropTypes.string,
  text: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
};

RegisterOption.defaultProps = {
  imgContent: 'Default Image',
  text: 'Default Text',
  content: 'Default Description',
  url: 'defaultUrl',
};

export default RegisterOption;
