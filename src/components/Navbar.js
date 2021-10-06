
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';
import { useHistory } from 'react-router';

import vibes from './images/vibes.png';
import {AiOutlineHome } from "react-icons/ai";


export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const history = useHistory();

  const [isMobile, setIsMobile] = useState(false);

  const logOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    history.push('/');
  }

  return (
    <div className="NavContainer">
     
        <img src={vibes}
        alt="logo" className="logo"></img>
     
     
        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=> setIsMobile(false)}>
          <NavLink className="login" to="/login">
           {!isLoggedIn ? <li>Log In </li> : <li onClick={logOut}>Log Out</li>} 
          </NavLink>
        
          {!isLoggedIn && (<NavLink className="signup" to="/signup">
            <li>Sign Up </li>
          </NavLink>)}

          
          {isLoggedIn && (
            <>
          <NavLink className="language" to="/languages">
           <li>Languages</li>
          </NavLink>
          
          <NavLink className="profile" to="/profile">
           <li>Profile</li> 
          </NavLink>
          <NavLink className="home" to="/">
           <li><AiOutlineHome /> </li> 
          </NavLink>
          </>)}
        </ul>

        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      
    </div>
  );
}

