import React from 'react';
import './Footer.css';



import {Link} from "react-router-dom";


import {
    TiSocialFacebook,
    TiSocialTwitter,
    
  } from "react-icons/ti";
   import {BsLinkedin} from "react-icons/bs";
  
  import { AiOutlineGithub } from "react-icons/ai";




export default function Footer() {
    return (
        <div className="Nav-container">
     
       
     
        <div className="copyright-socialmedia">
          <p>Copyright &copy; 2021 LCApp</p>
           
            
           <div className="social-media">  
            <p>Follow us on Social media</p>
           
             <div className="icons-div"> 
   
             
   
               <Link  to= {{ pathname: "https://github.com/leelaroshan" }} target="_blank" >  
               <AiOutlineGithub className="github" />
               </Link>
   
                
              <BsLinkedin className="linkedin" />
              
            </div>
   
           </div>
            
   
        </div>
           
   
          
       </div>
    )
}




