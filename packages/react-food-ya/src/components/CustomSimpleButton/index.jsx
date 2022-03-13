/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './style';

function CustomSimpleButton({ content, buttonStyle, callback, disabled }) {
  return (
    <>
      <ButtonContainer
        disabled={disabled}
        className={buttonStyle}
        type="button"
        onClick={() => callback()}
      >
        {content}
      </ButtonContainer>
    </>
  );
}

CustomSimpleButton.propTypes = {
  content: PropTypes.object,
  buttonStyle: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.bool
};

CustomSimpleButton.defaultProps = {
  content: {},
  buttonStyle: 'default-button',
  callback: null,
  disabled: true
};

export default CustomSimpleButton;
