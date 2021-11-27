import React from "react";
import "./style.css";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../navbar";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="box" >
      <p>
        {" "}
        welcome our friend Our site contains information about the solar system
        and planets, and there is also a quiz to test your knowledge. But you
        cannot enter before you register After registration, you can get
        everything you want, you are welcome{" "}
      </p>
      </div>
      {/* <Header />  */}
      {/* <Header  user={user} setUser={setUser} /> */}
      <Footer />

    </div>
  );
};

export default About;
