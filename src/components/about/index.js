import React from 'react';
import "./style.css";
import Footer from '../Footer';
import Header from "../Header"
import Navbar from '../navbar';


const About = () => {
    return (
       
            <div  className="container"> 
          <Navbar/>
           {/* <Header />  */}
           {/* <Header  user={user} setUser={setUser} /> */}
           <Footer/>
         
       
            <h1 style={{color:"white"}} >about</h1>
          </div>
    )
}

export default About;