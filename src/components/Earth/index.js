import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";

const Venus = () => {
  return (
    <>
      <div className="cont">
        <NavSolarSystem />

        <div className="header1">
          <div className="text">
            <h1>Earth</h1>
            <h4>
              Earth, our home planet, is a world unlike any other. The third
              planet from the sun, Earth is the only place in the known universe
              confirmed to host life. With a radius of 3,959 miles, Earth is the
              fifth largest planet in our solar system, and it's the only one
              known for sure to have liquid water on its surface.
            </h4>

            <h4>
              {" "}
              Facts about the Earth:
              <p> The Earth's rotation is gradually slowing. </p>
              <p> Earth has a powerful magnetic field.</p>
              <p> There is only one natural satellite of the planet Earth. </p>
              <p> The Earth is the densest planet in the Solar System.</p>
            </h4>

            <div className="list">
              <p>Diameter:7,917.5 mi</p>
              <p>Moons: 1</p>
            </div>
          </div>
        </div>
        <div className="pic">
          <img src="./img/earth.jpg" />
        </div>
      </div>
    </>
  );
};

export default Venus;
