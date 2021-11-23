import React from 'react';
import "./style.css";
import Footer from '../Footer';
import Header from "../Header"
import Navbar from '../navbar';

const Home = () => {
    return (
        <div  className="container"> 
          <Navbar/>
           <Header/> 
           <Footer/>
         
        </div>
    )
}


export default Home;