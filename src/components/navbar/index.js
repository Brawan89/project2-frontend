
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [signup, setsignup] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("User"))) {
      setsignup(true);
    }
  }, []);

  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
    localStorage.removeItem("User");
    window.location.reload(false);
  };

  return (
    <>
      <div className="menu">
        <ul>
          <NavLink to="/">
            <li className="logo">
              <img src="./img/logo10.png" />
            </li>
          </NavLink>

          <NavLink to="/" className="links">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="links">
            <li>about</li>
          </NavLink>
          <NavLink to="/solarsystem" className="links">
            <li>SolarSystem</li>
          </NavLink>
          {!signup && (
            <>
              <NavLink to="/signup" className="links">
                <li className="signup-btn">
                  <span>Sign Up</span>
                </li>
              </NavLink>
              <NavLink to="/login" className="links">
                <li>Login</li>
              </NavLink>
            </>
          )}

          <NavLink to="/quiz" className="links">
            <li>Quiz</li>
          </NavLink>

          <NavLink to="/" className="links">
            {signup ? (
              <li className="signup-btn" onClick={logoutUser}>
                <span>Logout</span>
              </li>
            ) : (
              ""
            )}
          </NavLink>
        </ul>
      </div>

      
    </>
  );
};
export default Navbar;
