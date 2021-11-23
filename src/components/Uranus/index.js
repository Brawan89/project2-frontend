import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";


const Uranus = () => {
  return (
    <>
    <div className="cont" >
      <NavSolarSystem />
     
        <div className="header1">
        <div className="text">
      <h1>Uranus</h1>
      <h4>
      Uranus is the seventh planet from the Sun. While being visible to the naked eye,
       it was not recognised as a planet due to its dimness and slow orbit. 
       Uranus became the first planet discovered with the use of a telescope.
       </h4>
      <div className="list">
        <p>- Diameter: 31,518 mi</p>
        <p>- Moons: 27</p>
      </div>
      </div>
      </div>
      <div className="pic" >
      <img src="./img/uranus.jpg" /></div>
    </div>
  
   
    
    </>
  );
};

export default Uranus;
