/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons/lib';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
import './style.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`main-footer ${theme}`}>
      <Container>
        <Row>
          <Col md={4} sm={6} className="pe-0 ps-0">
            <Link className="logo-container" to="/">
              <img
                src={theme === 'dark' ? '../../favicon.ico' : 'https://i.ibb.co/DDsSFVZ/logo.png'}
                alt="logo"
              />
            </Link>
          </Col>
          <Col className="align-items-center d-flex justify-content-center pe-0 ps-0" md={4} sm={6}>
            <IconContext.Provider value={{ color: '#f4ece1', size: '24px' }}>
              <div className="social-media-container">
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/?lang=es">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://co.linkedin.com/">
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/?hl=ES">
                      <BsYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </IconContext.Provider>
          </Col>
          <Col
            md={4}
            sm={12}
            className="pe-0 ps-0 d-flex align-items-center justify-content-center">
            <div className="contact-container">
              <p className="contact">foodya@foodya.com</p>
              <p className="contact">999 999 9999</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
