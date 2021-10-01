
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';
import vibes from './images/vibes.png'

export default function Navbar() {

  const [isMobile, setIsMobile] = useState(false);


  return (
    <div className="NavContainer">
     
        <img src={vibes}
        alt="logo" className="logo"></img>
     
     
        <ul className= {isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=> setIsMobile(false)}>
          <NavLink className="home" to="/login">
           <li>Log In </li> 
          </NavLink>
        
          <NavLink className="signup" to="/signup">
            <li>Sign Up </li>
          </NavLink>
          <NavLink className="language" to="/languages">
           <li> language</li>
          </NavLink>
          <NavLink className="profile" to="/profile">
           <li> Profile</li> 
          </NavLink>
        </ul>

        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      
    </div>
  );
}

