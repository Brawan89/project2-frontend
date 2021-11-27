import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"

const BASE_URL = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = localStorage.getItem(user);
    setUser(JSON.parse(users));
  }, []);

  const loginUser = async () => {
    const loguser = await axios.post(`${BASE_URL}/user/loginUser`, {
      email: email,
      password: password,
    });
    console.log(loguser);
    if (typeof loguser.data.user === "object") {
      localStorage.setItem("User", JSON.stringify({ user: loguser.data.user }));
      navigate("/");
    } else {
      console.log(loguser);
      setMessage(loguser.data.message);
      alert("please write your email and password")
    }
  };

  return (
    <div className="bodyform">
        <div className="login" >
          
          <h1 className="heade" >Login</h1>
          {message ? <div>{message}</div> : ""}
          <div className="loginHeader">
          <div  className="inpt">
            <input
            className="inp"
              type="text"
              name="email"
              placeholder="Enter Your Email "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input
            className="inp"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
          <input className="bt-sm" type="submit" value="login" onClick={loginUser} />
          
            <button className="bt-sm" >
              <Link className="links" to="/Signup">Register</Link>
            </button>
          </div>
          </div>
        </div>
     
    </div>
  );
};

export default Login;
