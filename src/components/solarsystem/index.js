import React from 'react';
import "./sstyle.css";
// import {Routes , Route} from "react-router-dom"
import NavSolarSystem from "./../NavSolarSystem"
// import Earth from '../Earth';
import HeaderSolerSystem from '../HeaderSolerSystem';



const SolarSystem = () => {
    return (
        <div className="cont">
        <NavSolarSystem/>
        <HeaderSolerSystem/>
        {/* <Routes> */}
      {/* <Route exact path="/" element={<Home/>} /> */}
        {/* <Route exact path="/earth" element={<Earth/>} /> */}
      {/* </Routes> */}
       
        </div>
    )
}

export default SolarSystem;