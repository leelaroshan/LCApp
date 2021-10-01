

import React from 'react';
import Button from "@material-ui/core/Button"

import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { FormGroup } from '@material-ui/core';

import {Checkbox } from "@material-ui/core";
// import { Checkbox } from '@material-ui/core/icons';
import { useHistory } from 'react-router';


import { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';

import './Login.css';


export default function Login({setUser,user}) {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayLogin, setDisplayLogin] = useState(false);
    let history = useHistory();

   

    const handleSubmit = (e) => {
       e.preventDefault();

       const newUser = {
         
        email,
        password
          
        };

        console.log("hey user");

        axios
        .post("https://thawing-dawn-59246.herokuapp.com/users/login", newUser)
        .then((res) => {
         setUser(res.data.data);
         history.push("/languages");
         console.log("login " , res.data);
        }).catch((err)=> console.log(err, err.response));
  
     
      setEmail("");
      setPassword("");
      
    };

    const onClick = ()=>{
      setDisplayLogin(!displayLogin);
    }


   
  
  //  if(user)
  //  return (
  //    <Redirect to="/languages" />
  //  )

   

    return (
    <div className="login-container">
      <h2 className="heading2">Welcome to the Language community</h2>
      <h4 className="login-h">Click here to <span onClick={onClick}>Login </span></h4>
       {/* if don't have account please <Link to="/signup" > Sign up</Link> here */}
      
      { displayLogin && (
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
       control={<Checkbox defaultChecked  color="success"/>} 
       label="Remember Me"
       
       />
       </FormGroup>
             
        <Button  type="submit"
        variant="contained"   
        onClick={handleSubmit}
        style={{ color: "teal",backgroundColor:"#5CE1E6", width:"300px" }} >
        Log In</Button>
 
        </div>
        </form>

      )}

       
   </div>
    )
}
