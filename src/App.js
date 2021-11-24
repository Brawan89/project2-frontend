import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/about";
import Comment from "./components/comment";
import SolarSystem from "./components/solarsystem";
import Earth from "./components/Earth";
import Mercury from "./components/Mercury";
import Venus from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Neptune from "./components/Neptune";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import SignUp from "./components/signup";
import Login from "./components/login";
import Quiz from "./components/Quiz"

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/comment" element={<Comment />} />
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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/quiz" element={<Quiz />} />
        
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
