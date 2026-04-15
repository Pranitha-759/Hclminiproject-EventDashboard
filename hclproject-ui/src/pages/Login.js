// import React,{useState} from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import "../App.css";

// function Login(){

// const[email,setEmail]=useState("");
// const[password,setPassword]=useState("");

// const navigate = useNavigate();

// const login = async()=>{

// try{

// const res = await axios.post(

// "http://localhost:8080/auth/login",

// {email,password}

// );

// localStorage.setItem("user",JSON.stringify(res.data));

// navigate("/dashboard");

// }catch(err){

// alert("Invalid login");

// }

// };

// return(

// <div className="form-page">

// <div className="form-card">

// <h2>Login</h2>

// <input
// placeholder="Email"
// value={email}
// onChange={e=>setEmail(e.target.value)}
// />

// <input
// type="password"
// placeholder="Password"
// value={password}
// onChange={e=>setPassword(e.target.value)}
// />

// <button onClick={login}>Login</button>

// </div>

// </div>

// );

// }

// export default Login;

import React, { useState } from "react";
import API from "../services/api";
import "./form.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async () => {

        try {

            const res = await API.post("/auth/login", { email, password });
            localStorage.setItem("user", JSON.stringify(res.data));

            navigate("/dashboard");

        } catch {

            alert("Invalid login");

        }

    };

    return (

        <div className="form-page">

            <div className="form-card">

                <h2>Login</h2>

                <input
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button onClick={login}>Login</button>


                <p className="register-link">

                    Don't have account?

                    <span onClick={() => navigate("/register")}>
                        Register here
                    </span>

                </p>


            </div>

        </div>

    )

}

export default Login;