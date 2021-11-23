import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";


const Venus = () => {
  return (
    <>
    <div className="cont" >
      <NavSolarSystem />
     
        <div className="header1">
        <div className="text">
      <h1>Venus</h1>
      <h4>
      Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon.
       Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass.
      </h4>
      <div className="list">
        <p>- Diameter: 7,521 mi</p>
        <p>- Moons: none</p>
      </div>
      </div>
      </div>
      <div className="pic" >
      <img src="./img/venus.jpg" /></div>
    </div>
  
   
    
    </>
  );
};

export default Venus;
