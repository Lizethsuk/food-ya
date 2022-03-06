/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function CustomButton({
  content, url, buttonStyle, callback, isLogin, id,
}) {
  const navigate = useNavigate();

  return (
    <>
      {
        !isLogin && (
          <Link className={buttonStyle} to={url} onClick={() => { callback(true); }}>
            {content}
          </Link>
        )
      }
      {
        isLogin && (
          <button className={buttonStyle} type="button" onClick={() => navigate(`/dish-manager/${id}`)}>
            {content}
          </button>
        )
      }
    </>
  );
}

CustomButton.propTypes = {
  content: PropTypes.string,
  url: PropTypes.string,
  buttonStyle: PropTypes.string,
  callback: PropTypes.func,
  isLogin: PropTypes.bool,
  id: PropTypes.number,
};

CustomButton.defaultProps = {
  content: 'Press me',
  url: 'https://es.reactjs.org/docs/create-a-new-react-app.html',
  buttonStyle: 'default-button',
  callback: null,
  isLogin: false,
  id: 0,
};

export default CustomButton;
