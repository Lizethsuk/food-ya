import React from 'react';
import Button from '../Button/';
import './style.scss';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
      <nav>
        <Link to="/">
          <img src="https://i.ibb.co/GH040rw/logo-color.png" width="150" alt="logo"></img>          
        </Link>
        <ul className="ButtonContainer">
          <li><Button 
                  content="Sign In" 
                  url="/sign-in" 
                  buttonStyle="ButtonHeader"/>
          </li>
          <li>
            <Button 
              content="Sign Up" 
              url="/register-selection" 
              buttonStyle="ButtonHeader"/>
          </li>
        </ul>    
      </nav>
    )
  }

export default Navbar;