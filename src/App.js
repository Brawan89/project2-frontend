import React from "react";
import {Routes , Route} from "react-router-dom"
import  "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Comment from "./components/comment"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="container"> 
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/comment" element={<Comment/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
