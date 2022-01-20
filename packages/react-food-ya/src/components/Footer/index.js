import { React } from "react";
import { IconContext } from "react-icons/lib";
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import "./style.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* col-1 */}
          <div className="col-1">
            <img src="https://i.ibb.co/DDsSFVZ/logo.png" alt="logo" />
          </div>
          {/* col-2 */}
          <IconContext.Provider value={{ color: "#f4ece1", size: "24px" }}>
            <div className="col-2">
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
          {/* col-3 */}
          <div className="col">
            <p className="contact">example@gmail.com</p>
            <p className="contact">#555555555555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
