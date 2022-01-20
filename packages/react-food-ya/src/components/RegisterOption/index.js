import { React } from 'react';
import Button from "../Button";
import './style.scss';

const RegisterOption=({img_content,text,content,url})=>{
    return (
        <div className="register-option">
            <img className="register-img" src={img_content} alt="A"/>
            <p className="register-description">{text}</p>
            <Button content={content} url={url}/>
        </div>
    )
}

export default RegisterOption;