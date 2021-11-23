import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";


const Saturn = () => {
  return (
    <>
    <div className="cont" >
      <NavSolarSystem />
     
        <div className="header1">
        <div className="text">
      <h1>Saturn</h1>
      <h4>
      Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye.
       Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei.
      </h4>
      <div className="list">
        <p>- Diameter: 72,367.4 mi</p>
        <p>- Moons: 62</p>
      </div>
      </div>
      </div>
      <div className="pic" >
      <img src="./img/saturn.jpg" /></div>
    </div>
  
   
    
    </>
  );
};

export default Saturn;
