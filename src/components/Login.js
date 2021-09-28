

import React from 'react';
import Button from "@material-ui/core/Button"

import TextField from "@material-ui/core/TextField";
import { useHistory } from 'react-router';


import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import './Login.css';
import Languages from './Languages';

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

        axios
        .post("http://localhost:5000/users/login", newUser)
        .then((res) => {
         setUser(res.data);
        }).catch((err)=> console.log(err, err.response));
  
     
      setEmail("");
      setPassword("");
      
    };

    const onClick = ()=>{
      setDisplayLogin(!displayLogin);
    }


    function handleClick() {
      history.push("/languages");
    }
  
  //  if(user)
  //  return (
  //    <Redirect to="/languages" />
  //  )

   

    return (
    <div className="login-container">
      <h2 className="heading2">Welcome to the Language community</h2>
      <h4 className="login-h">Click here to <span onClick={onClick}>Login </span> if don't have account please Sign up here</h4>
      
      { displayLogin && (
        <form  onSubmit={handleSubmit}>
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
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "20px",marginTop:"20px", width:"300px"}}
       />
             
        <Button  type="submit"
        variant="contained"   
        onClick={handleClick}
        style={{ color: "teal",backgroundColor:"#9AD4E4", width:"300px" }} >
        Log In</Button>
 
        </div>
        </form>

      )}

       
   </div>
    )
}
