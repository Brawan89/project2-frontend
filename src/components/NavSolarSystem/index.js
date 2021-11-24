import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

const NavSolarSystem = () => {
    return (
        <>
        <div className="cont" >
         <div className="solarmenu">
           <ul>
           <Link to="/" >
          <li className="logo"><img src="./img/logo10.png" /></li>
        </Link>
        <Link to="/earth" className="links">
        <li >Earth</li>
        </Link>
        <Link to="/mercury" className="links">
        <li >Mercury</li>
        </Link>
        <Link to="/venus" className="links">
        <li >Venus</li>
        </Link>
        <Link to="/mars" className="links">
        <li >Mars</li>
        </Link>
        <Link to="/jupiter" className="links">
        <li >Jupiter</li>
        </Link>
        <Link to="/saturn" className="links">
        <li >Saturn</li>
        </Link>
        <Link to="/uranus" className="links">
        <li >Uranus</li>
        </Link>
        <Link to="/neptune" className="links">
        <li >Neptune</li>
        </Link>
        <Link to="/quiz" className="links">
        <li >Quiz</li>
        </Link>
        </ul>
        </div>
        </div>
        </>
    )
}

export default NavSolarSystem;