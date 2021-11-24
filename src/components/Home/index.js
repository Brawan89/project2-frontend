import React, {useState} from 'react';
import "./style.css";
import Footer from '../Footer';
import Header from "../Header"
import Navbar from '../navbar';

const Home = () => {
    const [user, setUser] = useState(localStorage.getItem("user"));
    
    return (
        <div  className="container"> 
          <Navbar/>
           <Header user={user} setUser={setUser}/> 
           {/* <Header  user={user} setUser={setUser} /> */}
           <Footer/>
         
        </div>
    )
}


export default Home;