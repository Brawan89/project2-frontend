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
      <h1>Earth</h1>
      <h4>
      Earth is the third planet from the Sun and is the largest of the terrestrial planets.
       The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. 
      The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.
      </h4>
      <div className="list">
        <p>- Diameter:7,917.5 mi</p>
        <p>- Moons: 1</p>
      </div>
      </div>
      </div>
      <div className="pic" >
      <img src="./img/earth.jpg" /></div>
    </div>
  
   
    
    </>
  );
};

export default Venus;
