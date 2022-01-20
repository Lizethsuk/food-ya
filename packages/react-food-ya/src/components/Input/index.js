import React from 'react';
import './style.scss';

const Input = ({name,type,label,placeholder,onChange})=>{
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Input;
