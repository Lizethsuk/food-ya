import { React, Component } from "react";
import CustomButton from "../CustomButton";
import "./style.scss";


class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-text">
          <h1>Food Ya!</h1>
          <p>Find your favourite food here!</p>
          <CustomButton content={"Try here!"} url={"/register-selection"} />
        </div>
      </div>
    );
  }
}

export default Banner;
