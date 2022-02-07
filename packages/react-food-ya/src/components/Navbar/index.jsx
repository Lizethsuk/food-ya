import React from 'react';
import {
  Container, Navbar, NavDropdown, Nav,
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
    <Navbar expand="lg">
      <Container>
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
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
