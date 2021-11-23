import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";


const Mars = () => {
  return (
    <>
    <div className="cont" >
      <NavSolarSystem />
     
        <div className="header1">
        <div className="text">
      <h1>Mars</h1>
      <h4>
      The fourth planet from the Sun and the second smallest planet in the solar system. 
      Mars is often described as the "Red Planet" due to its reddish appearance. 
      It's a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.
      </h4>
      <div className="list">
        <p>- Diameter: 4,212 mi</p>
        <p>- Moons: 2</p>
      </div>
      </div>
      </div>
      <div className="pic" >
      <img src="./img/mars.jpg" /></div>
    </div>
  
   
    
    </>
  );
};

export default Mars;
