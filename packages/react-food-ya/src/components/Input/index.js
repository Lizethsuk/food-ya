import React from "react";
import "./style.scss";

const Input=({labelContent,type})=>{
    return(
        <div className="input">
            <label className="input-text">{labelContent}</label>
            <input className="input-content" type={type} />
        </div>
    )
}
export default Input;