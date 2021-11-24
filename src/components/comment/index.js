import React from 'react';
import Navbar from "./../navbar";
import Footer from "./../Footer";
import "./style.css";

const Comment = () => {
    return (
            <div  className="container"> 
          <Navbar/>
           {/* <Header />  */}
           {/* <Header  user={user} setUser={setUser} /> */}
           <Footer/>
            <h1 style={{color:"white"}}>comments</h1>
        </div>
    )
}


export default Comment;