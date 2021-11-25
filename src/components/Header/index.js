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
          Here we show information about the solar system 
          so log in to learn with us and test your knowledge
          </p>
          {/* <span>
            Click on learn more to display information for each planet{" "}
          </span> */}
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
