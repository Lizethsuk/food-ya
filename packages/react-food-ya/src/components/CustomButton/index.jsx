import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function CustomButton({ content, url, buttonStyle, callback, isLogin, id }) {
  const navigate = useNavigate();

  const RedirectTo = () => {
    if (callback) {
      callback(true);
    }
    navigate(`${url}`);
  };

  return (
    <>
      {!isLogin && (
        <button className={buttonStyle} type="button" onClick={() => RedirectTo()}>
          {content}
        </button>
      )}
      {isLogin && (
        <button
          className={buttonStyle}
          type="button"
          onClick={() => navigate(`/dish-manager/${id}`)}>
          {content}
        </button>
      )}
    </>
  );
}

CustomButton.propTypes = {
  content: PropTypes.string,
  url: PropTypes.string,
  buttonStyle: PropTypes.string,
  callback: PropTypes.func,
  isLogin: PropTypes.bool,
  id: PropTypes.string
};

CustomButton.defaultProps = {
  content: 'Press me',
  url: 'https://es.reactjs.org/docs/create-a-new-react-app.html',
  buttonStyle: 'default-button',
  callback: null,
  isLogin: false,
  id: '0'
};

export default CustomButton;
