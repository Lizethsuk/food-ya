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
import { UserContext } from '../../context/userContext';

function CustomNavbar() {
  const { user, ChangeTokenState } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const ToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
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
          {user.token
            ? (
              <Nav className="ms-auto align-items-end">
                <Link to="/sign-in" className="navUser">
                  <img
                    src="https://media.istockphoto.com/vectors/female-photographer-holds-a-camera-and-takes-a-picture-tourist-and-vector-id1175499661"
                    alt="logo"
                    className="img-user"
                  />
                  <h4>Maria Fernanda</h4>
                </Link>
                <Link to="/" className="navSesion" onClick={() => { ChangeTokenState(false); }}>
                  <p>Cerrar Sesión</p>
                </Link>
                <button type="button" className={`buttonTheme ${theme}`} onClick={() => ToggleTheme()}>{theme === 'dark' ? <BsLightbulbFill /> : <BsFillLightbulbOffFill />}</button>
              </Nav>
            )
            : (
              <Nav className="ms-auto align-items-end">
                <Link to="/sign-in" className="ButtonHeader">Sign In</Link>
                <Link to="/register-selection" className="ButtonHeader">Sign Up</Link>
                <button type="button" className={`buttonTheme ${theme}`} onClick={() => ToggleTheme()}>{theme === 'dark' ? <BsLightbulbFill /> : <BsFillLightbulbOffFill />}</button>
              </Nav>
            )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
