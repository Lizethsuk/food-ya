import React from 'react';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

function CustomNavbar() {
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
      <Container fluid>
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
          <Nav className="ms-auto align-items-end">
            <Nav.Link href="/sign-in" className="ButtonHeader">Sign In</Nav.Link>
            <Nav.Link href="/register-selection" className="ButtonHeader">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
