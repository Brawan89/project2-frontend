import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <>
      <div className="banner">
        <div className="app-text">
          <h1>Welcome</h1>
          <p>
            The Solar System consists of the Sun and its planetary system of
            eight planets, their moons, and other non-stellar objects. It formed
            4.6 billion years ago from the gravitational collapse of a giant
            molecular cloud. All planets have almost circular orbits that lie
            within a nearly flat disc called the ecliptic plane.
          </p>
          <span>
            Click on learn more to display information for each planet{" "}
          </span>
          <div className="more-btn">
           <Link to="/solarsystem"> <b>Learn More</b></Link>
          </div>
        </div>
        <div className="app-picture">
          <img src="./img/panar12.gif" />
        </div>
      </div>
    </>
  );
};

export default Header;
