import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";

const Jupiter = () => {
  return (
    <>
      <div className="cont">
        <NavSolarSystem />

        <div className="header1">
          <div className="text">
            <h1>Jupiter</h1>
            <h4>
              The planet Jupiter is the fifth planet out from the Sun, and is
              two and a half times more massive than all the other planets in
              the solar system combined. It is made primarily of gases and is
              therefore known as a "gas giant".
            </h4>

            <h4>
              Facts about Jupiter:
              <p>Jupiter is the fourth brightest object in the solar system.</p>
              <p>
                The ancient Babylonians were the first to record their sightings
                of Jupiter.
              </p>
              <p>Jupiter has the shortest day of all the planets.</p>
              <p>Jupiter orbits the Sun once every 11.8 Earth years.</p>
              <p>Jupiter has unique cloud features.</p>
            </h4>

            <div className="list">
              <p>Diameter: 86,881.4 mi</p>
              <p>Moons: 79</p>
            </div>
          </div>
        </div>
        <div className="pic">
          <img src="./img/jupiter.jpg" />
        </div>
      </div>
    </>
  );
};

export default Jupiter;
