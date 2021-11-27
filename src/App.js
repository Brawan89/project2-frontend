import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/about";
import SolarSystem from "./components/solarsystem";
import Earth from "./components/Earth";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Neptune from "./components/Neptune";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import SignUp from "./components/signup";
import Login from "./components/login";
import Quiz from "./components/Quiz";
import ShowResult from "./components/ShowResult";

function App() {
  const [user, setUser] = useState(localStorage.getItem("User"));
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/solarsystem" element={<SolarSystem />} />
        <Route exact path="/earth" element={<Earth />} />
        <Route exact path="/mercury" element={<Mercury />} />
        <Route exact path="/venus" element={<Venus />} />
        <Route exact path="/mars" element={<Mars />} />
        <Route exact path="/jupiter" element={<Jupiter />} />
        <Route exact path="/neptune" element={<Neptune />} />
        <Route exact path="/Saturn" element={<Saturn />} />
        <Route exact path="/uranus" element={<Uranus />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/showresult" element={<ShowResult />} />

        <Route
          exact
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
