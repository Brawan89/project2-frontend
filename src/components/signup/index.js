import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./style.css";

const BASE_URL = "http://localhost:5000";
const SignUp = () => {
    const navigate = useNavigate();
   

    const register = async (e) =>{
        e.preventDefault();
        try{
            await axios
            .post(`${BASE_URL}/user/signupUser` , {
                userName:e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            })
            .then((response) => {
                console.log(response.data);
                if (response.data._id) {
                  console.log("registered successfully");
                  localStorage.setItem("User", response.data);
                  navigate("/"); 
                }
              });
          } catch (err) {
            console.error(err);
          }
      
        };
        
    
    return (
        <>
            <div className = "RegBox">
      <form onSubmit={register}>
      <h1> Register </h1>
        <input
          type="text"
          name="username"
          placeholder="username"
         required/>
        <input
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
         
        />
        <button type="submit">Register</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button> 
        </form>
    </div>
        </>
    );

    };
export default SignUp;