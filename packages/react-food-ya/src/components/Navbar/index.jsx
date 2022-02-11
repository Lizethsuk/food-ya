import { Link } from 'react-router-dom';
import React from 'react';
import CustomButton from '../CustomButton';
import './style.scss';

function Navbar() {
  return (
    <nav>
      <Link className="logo-link" to="/">
        <img
          src="https://i.ibb.co/GH040rw/logo-color.png"
          width="150"
          alt="logo"
        />
      </Link>
      <ul className="ButtonContainer">
        <li>
          <CustomButton content="Sign In" url="/sign-in" buttonStyle="ButtonHeader" />
        </li>
        <li>
          <CustomButton
            content="Sign Up"
            url="/register-selection"
            buttonStyle="ButtonHeader"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
