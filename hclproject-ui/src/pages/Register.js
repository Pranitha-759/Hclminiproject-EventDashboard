// // import { useState } from "react";
// // import API from "../services/api";
// // import "../App.css";

// // function Register(){

// // const [data,setData]=useState({

// // username:"",
// // email:"",
// // password:"",
// // role:"USER"

// // });

// // const handleChange=e=>{

// // setData({...data,[e.target.name]:e.target.value});

// // }

// // const register=async()=>{

// // await API.post("/auth/register",data);

// // alert("Registered successfully");

// // window.location="/";

// // }

// // return(

// // <div className="login-page">

// // <div className="login-card">

// // <h2>Register</h2>

// // <input name="username" placeholder="Username" onChange={handleChange}/>

// // <input name="email" placeholder="Email" onChange={handleChange}/>

// // <input name="password" placeholder="Password" onChange={handleChange}/>

// // <select name="role" onChange={handleChange}>

// // <option value="USER">User</option>
// // <option value="ADMIN">Admin</option>

// // </select>

// // <button onClick={register}>Register</button>

// // </div>

// // </div>

// // )

// // }

// // export default Register;
// import React,{useState} from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import "./form.css";

// function Register(){

// const[name,setName]=useState("");
// const[email,setEmail]=useState("");
// const[password,setPassword]=useState("");

// const navigate = useNavigate();

// const register = async()=>{

// try{

// await axios.post(

// "http://localhost:8080/auth/register",

// {
// name,
// email,
// password,
// role:"USER"
// }

// );

// alert("Registration successful");

// navigate("/login");

// }catch(err){

// alert("Registration failed");

// }

// };

// return(

// <div className="form-page">

// <div className="form-card">

// <h2>Register</h2>

// <input
// placeholder="Name"
// value={name}
// onChange={e=>setName(e.target.value)}
// />

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

// <button onClick={register}>Register</button>

// <p>

// Already have account?

// <span onClick={()=>navigate("/login")}>

//  Login

// </span>

// </p>

// </div>

// </div>

// );

// }

// export default Register;

import React,{useState} from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "./form.css";

function Register(){

const[name,setName]=useState("");

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const[role,setRole]=useState("USER");   // default USER

const navigate = useNavigate();

const register = async()=>{

await API.post("/auth/register",{
name,
email,
password,
role
});

alert("Registered Successfully");

navigate("/login");

};

return(

<div className="form-page">

<div className="form-card">

<h2>Register</h2>

<input
placeholder="Name"
value={name}
onChange={e=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={e=>setPassword(e.target.value)}
/>


{/* Role selection */}

<select
value={role}
onChange={e=>setRole(e.target.value)}
>

<option value="USER">Register as User</option>

<option value="ADMIN">Register as Admin</option>

</select>


<button onClick={register}>

Register

</button>


<p className="register-link">

Already have account?

<span onClick={()=>navigate("/login")}>

 Login

</span>

</p>

</div>

</div>

)

}

export default Register;