

import React from 'react';
import Button from "@material-ui/core/Button"

import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { FormGroup } from '@material-ui/core';

import {Checkbox } from "@material-ui/core";
import {BsFileLockFill} from 'react-icons/bs';
// import { Checkbox } from '@material-ui/core/icons';

import {Link} from "react-router-dom";


import { useState } from 'react';
import axios from 'axios';

import './Login.css';


export default function Login({setUser,user, setToken, isLoggedIn, setIsLoggedIn, login }) {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [displayLogin, setDisplayLogin] = useState(false);

   

    const handleSubmit = (e) => {
       e.preventDefault();

       const newUser = {
         
        email,
        password
          
        };

        console.log("hey user");

        login(newUser)
  
     
      setEmail("");
      setPassword("");
      
    };

  
 
  
  
  //  if(user)
  //  return (
  //    <Redirect to="/languages" />
  //  )

   

    return (
    <div className="login-container">
      <h2 className="heading2">Welcome to the Language community</h2>
      {!isLoggedIn && <h4 className="login-h">Log in  </h4>}
       {/* <span onClick={onClick}>Login </span> if don't have account please <Link to="/signup" > Sign up</Link> here */}
      
       <h2 className="heading2"><BsFileLockFill  className="signup-icon" />  </h2>
        <form  >
        <div className="form-div"> 
        <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-textfield"
        style={{ marginBottom: "20px",marginTop:"20px", width:"300px", height:"50px"}}
        />
        <TextField
        id="filled-basic"
        label="Password"
        type="password"
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "20px",marginTop:"20px", width:"300px"}}
       />
       <FormGroup>
       <FormControlLabel 
       control={<Checkbox defaultChecked  color="default"/>} 
       label="Remember Me"
       
       />
       </FormGroup>
             
        <Button  type="submit"
        variant="contained"   
        onClick={handleSubmit}
        style={{ color: "teal",marginTop:"30px",marginBottom:"30px",backgroundColor:"#5CE1E6", width:"300px" }} >
        Log In</Button>


       <Link to="/signup"> 
        <p className="signup-link">Don't have an account Please Signup</p>
        </Link>
 
        </div>
        </form>

     
       
   </div>
    )
}
