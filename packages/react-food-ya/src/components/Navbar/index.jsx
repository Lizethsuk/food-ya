/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
import React, { useContext } from 'react';
import { UserContext } from '../../App';

function CustomNavbar() {
  const { user } = useContext(UserContext);
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
    <Navbar expand="md">
      <Container fluid className="pe-0 ps-0">
        <Navbar.Brand>
          <Link className="logo-link" to="/">
            <img
              src="https://i.ibb.co/GH040rw/logo-color.png"
              width="150"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content">

          {/*         <Nav className="ms-auto align-items-end">
            <Nav.Link href="/sign-in" className="ButtonHeader">Sign In</Nav.Link>
            <Nav.Link href="/register-selection" className="ButtonHeader">Sign Up</Nav.Link>
            soy otro
          </Nav>
 */}
          { user.token
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
                <Link to="/" className="navSesion">

                  <p>Cerrar Sesión</p>
                </Link>

              </Nav>
            )
            : (
              <Nav className="ms-auto align-items-end">
                <Nav.Link href="/sign-in" className="ButtonHeader">Sign In</Nav.Link>
                <Nav.Link href="/register-selection" className="ButtonHeader">Sign Up</Nav.Link>

              </Nav>
            )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
