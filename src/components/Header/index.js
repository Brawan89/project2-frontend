import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {

  const [signup, setsignup] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("User"))) {
      setsignup(true);
    }
  }, []);

  return (
    <>
      <div className="banner">
       
           {!signup && (
            <>
            <div className="app-text">
          <h1>Welcome</h1>
          <p 
          style={{fontSize: "20px"}}>
          Here we show information about the solar system 
          so log in to learn with us and test your knowledge
          </p>
             {/* <div className="more-btn">
           <Link to="/login"> <b style={{fontSize: "24px"}} >Login</b></Link>
          </div> */}
          </div>
             </>
          )}

          {signup ? (
              <>
          <div className="app-text">
          <h1> Hello  </h1>
          <p style={{fontSize: "18px"}} >
            The Solar System consists of the Sun and its planetary system of
            eight planets, their moons, and other non-stellar objects. It formed
            4.6 billion years ago from the gravitational collapse of a giant
            molecular cloud. All planets have almost circular orbits that lie
            within a nearly flat disc called the ecliptic plane.
          </p>
          <p style={{color:"gray" , fontSize: "14px"}}>
            Click on learn more to display information for each planet{" "}
          </p>
           <div className="more-btn">
           <Link className="links" to="/earth"> <b style={{fontSize: "24px"}} >Solar System</b></Link>
          </div>
          </div>
         
             </>
            ) : (
              ""
              )}
        </div>
        <div className="app-picture">
          <img src="./img/panar12.gif" />
        </div>
    </>
  );
};

export default Header;
