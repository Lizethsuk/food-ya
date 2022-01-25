import React from 'react';
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

export default RegisterOption;
