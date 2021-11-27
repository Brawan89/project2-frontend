import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = "http://localhost:5000";

const SignUp = () => {
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios
        .post(`${BASE_URL}/user/signupUser`, {
          userName: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            console.log("registered successfully");
            localStorage.setItem("User", JSON.stringify(response.data));
            navigate("/");
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={register}>
        <h1 className="heade">Register</h1>
        <div className="inpt">
          <input
            className="inp"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="inp"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="inp"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <div>
        <button className="bt" type="submit">
          Register
        </button>
        <button
          className="bt"
          onClick={() => {
            navigate("/");
          }}
        >
          Cancle
        </button>
          </div>
        <div>
          <p className="ptext">
            If you have already account please go to
            <Link className="links-btn" to="/login">
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
export default SignUp;
