import React from "react";
import NavSolarSystem from "./../NavSolarSystem";
import "./style.css";
// import "./../../App.css";

const Mercury = () => {
  return (
    <>
      <div className="cont">
        <NavSolarSystem />

        <div className="header1">
          <div className="text">
            <h1>Mercury</h1>
            <h4>
              Mercury is the closest planet to the Sun. Due to its proximity,
              it's not easily seen except during twilight. For every two orbits
              of the Sun, Mercury completes three rotations about its axis. Up
              until 1965 it was thought that the same side of Mercury constantly
              faced the Sun.
            </h4>
            <h4>
              Facts about Mercury
              <p>Mercury does not have any moons or rings.</p>
              <p> Mercury is the smallest planet. </p>
              <p> Mercury is the closest planet to the Sun.</p>
              <p>
                {" "}
                Your weight on Mercury would be 38% of your weight on Earth.
              </p>
              <p>
                {" "}
                A solar day on the surface of Mercury lasts 176 Earth days.
              </p>
              <p>
                {" "}
                A year on Mercury takes 88 Earth days. It’s not known who
                discovered Mercury.{" "}
              </p>
            </h4>
            <div className="list">
              <p>Diameter: 3,031.67 mi</p>
              <p>Moons: none</p>
            </div>
          </div>
        </div>
        <div className="pic">
          <img src="./img/mercury.jpg" />
        </div>
      </div>
    </>
  );
};

export default Mercury;
