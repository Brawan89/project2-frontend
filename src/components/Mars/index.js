import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";

const Mars = () => {
  return (
    <>
      <div className="cont">
        <NavSolarSystem />

        <div className="header1">
          <div className="text">
            <h1>Mars</h1>
            <h4>
              The fourth planet from the Sun and the second smallest planet in
              the solar system. Mars is often described as the "Red Planet" due
              to its reddish appearance. It's a terrestrial planet with a thin
              atmosphere composed primarily of carbon dioxide.
            </h4>
            <h4>
              Facts about Mars:
              <p>Mars and Earth have approximately the same landmass.</p>
              <p>Mars is home to the tallest mountain in the solar system.</p>
              <p>Only 18 missions to Mars have been successful.</p>
              <p>Mars has the largest dust storms in the solar system.</p>
              <p>
                On Mars, the Sun appears about half the size it does on Earth.
              </p>
            </h4>

            <div className="list">
              <p>Diameter: 4,212 mi</p>
              <p>Moons: 2</p>
            </div>
          </div>
        </div>
        <div className="pic">
          <img src="./img/mars.jpg" />
        </div>
      </div>
    </>
  );
};

export default Mars;
