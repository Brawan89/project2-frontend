import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    }
  };

  return (
    <div>
      {user ? (
        <h1>
          You are already logged in, go to <Link to="/">Recipes</Link>
        </h1>
      ) : (
        <div>
          <h1>Login</h1>
          {message ? <div>{message}</div> : ""}
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="login" onClick={loginUser} />
          <div>
            <p>
              If you don't have an account,{" "}
              <Link to="/Signup">Register now!</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
