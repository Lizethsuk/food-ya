/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs';
import { ThemeContext } from '../../context/themeContext';
import './style.scss';

function CustomNavbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const ToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    // <nav>
    //   <Link className="logo-link" to="/">
    //     <img
    //       src="https://i.ibb.co/GH040rw/logo-color.png"
    //       width="150"
    //       alt="logo"
    //     />
    //   </Link>
    //   <ul className="ButtonContainer">
    //     <li>
    //       <CustomButton content="Sign In" url="/sign-in" buttonStyle="ButtonHeader" />
    //     </li>
    //     <li>
    //       <CustomButton
    //         content="Sign Up"
    //         url="/register-selection"
    //         buttonStyle="ButtonHeader"
    //       />
    //     </li>
    //   </ul>
    // </nav>
    <Navbar expand="md" className={theme}>
      <Container className="pe-0 ps-0">
        <Navbar.Brand>
          <Link className="logo-link" to="/">
            <img
              src={theme === 'dark' ? '../../favicon.ico' : 'https://i.ibb.co/GH040rw/logo-color.png'}
              width="150"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content">
          <Nav className="ms-auto align-items-end">
            <Link to="/sign-in" className="ButtonHeader">Sign In</Link>
            <Link to="/register-selection" className="ButtonHeader">Sign Up</Link>
            <button type="button" className={`buttonTheme ${theme}`} onClick={() => ToggleTheme()}>{theme === 'dark' ? <BsLightbulbFill /> : <BsFillLightbulbOffFill /> }</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
