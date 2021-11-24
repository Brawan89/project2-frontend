import React , {useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


const BASE_URL = "http://localhost:5000";

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const login = async (e) =>{
        e.preventDefault();
        try{
            await axios
            .post(`${BASE_URL}/user/loginUser` , {
                email: e.target.email.value,
                password: e.target.password.value
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.userid) {
                    console.log("login successfully");
                    localStorage.setItem("User", response.data);
                    navigate("/"); 
                }
            })
        }catch(err){
            console.error(err);
        }
    };

    return (
        <>
        <div>
        <h1>Login page</h1>
        <form onSubmit={login}>
        <p>Email</p>
        <input type="email" name="email" required />
        <p>Password</p>
        <input type="password" name="password" required />
        <br/>
        {errorMessage}
        <br/>
        <button type="submit">Login</button>
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
    )
}

export default Login;