import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  BsFacebook, BsTwitter, BsLinkedin, BsYoutube,
} from 'react-icons/bs';
import './style.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="row-footer">
          <Link className="logo-container" to="/">
            <img src="https://i.ibb.co/DDsSFVZ/logo.png" alt="logo" />
          </Link>

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

          <div className="contact-container">
            <p className="contact">example@gmail.com</p>
            <p className="contact">#555555555555</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
