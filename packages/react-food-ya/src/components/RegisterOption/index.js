import { React } from "react";
import CustomButton from "../CustomButton";
import "./style.scss";
import { Card } from "react-bootstrap";

const RegisterOption = ({ img_content, text, content, url }) => {
  return (
    // <div className="register-option">
    //   <img className="register-img" src={img_content} alt="A" />
    //   <p className="register-description">{text}</p>
    //   <CustomButton content={content} url={url} />
    // </div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img_content} alt="A"/>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <CustomButton content={content} url={url} />
      </Card.Body>
    </Card>
  );
};

export default RegisterOption;
