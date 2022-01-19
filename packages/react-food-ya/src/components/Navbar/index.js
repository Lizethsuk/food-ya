import React from 'react';
import Button from '../Button/';
import './style.scss';
const Navbar = ()=>{
    return(
      <nav>
        <figure>
          <img src="https://i.ibb.co/GH040rw/logo-color.png" width="150" alt="logo"></img>          
        </figure>
        <lu class="ButtonContainer">
          <li><Button 
                  content="Sign In" 
                  url="" 
                  buttonStyle="ButtonHeader"/>
          </li>
          <li>
            <Button 
              content="Sign Up" 
              url="" 
              buttonStyle="ButtonHeader"/>
          </li>
        </lu>    
      </nav>
    )
  }

export default Navbar;