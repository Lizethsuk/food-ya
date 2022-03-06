/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import CustomButton from '../../components/CustomButton';
import './style.scss';
import { UserContext } from '../../context/userContext';

function NotFound() {
  const { user } = useContext(UserContext);

  return (
    <div className="landing-page">
      <div className="error-container">
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <CustomButton
          buttonStyle="fit-content-button"
          content="Go back home"
          url={!user.token ? '/' : '/home'}
        />
      </div>
    </div>
  );
}

export default NotFound;
