import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.css"

const Navbar = () => {
    return (
        <>
         <div className="menu">
           <ul>
           <NavLink to="/" >
          <li className="logo"><img src="./img/logo10.png" /></li>
        </NavLink>
        
        <NavLink to="/" className="links">
        <li >Home</li>
        </NavLink>
        <NavLink to="/about" className="links">
        <li >about</li>
        </NavLink>
        <NavLink to="/comment" className="links">
        <li >comment</li>
        </NavLink>
        <NavLink to="/signup" className="links">
        <li className="signup-btn" ><span>Sign Up</span></li>
        </NavLink>
         
          
        </ul>
        </div>
        </>
    )
}

export default Navbar;