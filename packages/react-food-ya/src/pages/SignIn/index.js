import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./style.scss";

const SignIn = () => {
  return (
    <div className="sign-in-page">
        <div className="sign-in-container">
          <h2 className="sign-in-title">Sign In</h2>
          <form className="sign-in-option-container">
            <Input labelContent={"Correo electrónico"} type={"text"}/>
            <Input labelContent={"Contraseña"} type={"password"}/>
            <Button content={"Sign In"} url={"/"} buttonStyle={"fit-content-button"}/>
          </form>
        </div>
    </div>
  );
};
export default SignIn;
