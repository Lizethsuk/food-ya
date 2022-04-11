/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './style';

function CustomSimpleButton({ content, buttonStyle, callback, disabled, buttonType }) {
  return (
    <ButtonContainer
      disabled={disabled}
      className={buttonStyle}
      type={buttonType}
      onClick={() => callback()}>
      {content}
    </ButtonContainer>
  );
}

CustomSimpleButton.propTypes = {
  content: PropTypes.object,
  buttonStyle: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
  buttonType: PropTypes.string
};

CustomSimpleButton.defaultProps = {
  content: {},
  buttonStyle: 'default-button',
  callback: null,
  disabled: true,
  buttonType: 'button'
};

export default CustomSimpleButton;
