import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";

const Neptune = () => {
  return (
    <>
      <div className="cont">
        <NavSolarSystem />

        <div className="header1">
          <div className="text">
            <h1>Neptune</h1>
            <h4>
              Neptune is the eighth planet from the Sun making it the most
              distant in the solar system. This gas giant planet may have formed
              much closer to the Sun in early solar system history before
              migrating to its present position.
            </h4>
            <h4>
              Facts about Neptune
              <p>Neptune is the most distant planet from the Sun.</p>
              <p>Neptune is the smallest gas giant.</p>
              <p>A year on Neptune lasts 165 Earth years.</p>
              <p>Neptune has 6 faint rings.</p>
            </h4>

            <div className="list">
              <p> Diameter: 30,599 mi</p>
              <p> Moons: 14</p>
            </div>
          </div>
        </div>
        <div className="pic">
          <img src="./img/neptune.jpg" />
        </div>
      </div>
    </>
  );
};

export default Neptune;
