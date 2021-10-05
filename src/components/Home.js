import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import main from './images/main.png';





export default function Home({ isLoggedIn }) {
    return (
     <div className="home-container">
      <div className="content-div">
      <h2 className="home-heading">Welcome to the Language community</h2>
      {!isLoggedIn && (
      <h4 className="login-signup">Click here to <Link to="/login">Login </Link>
       if don't have account please <Link to="/signup" > Sign up</Link> here
       </h4>
       )}
      
      <div className="about-app"> 
       <div className="animation-div">
       <img src={main}
       className="main-img" 
       alt="lang-img"/>
       </div>

       <div className="about">
           <h2 className="about-heading">Language Community App</h2>
           <h4 className="about-p">Language exchange is an important element of your language
             learning experience, and apps just make the whole process
             more convenient. There’s nothing like talking to a native
            speaker right on your phone and taking notes from someone who’s
            a linguistic insider. Yes, using music, games and videos can have 
            pretty profound effects on your learning curve, too, but don’t you
             dare miss out on the awesome benefits of language exchange apps.</h4>


       </div>

       </div>

     </div>
            
     </div>
    )
}
