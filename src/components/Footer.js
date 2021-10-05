import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
// import vibes from './images/vibes.png';
import CopyrightIcon from '@material-ui/icons/Copyright';



export default function Footer() {
    return (
    <div className="Nav-container">
     
       
     
     <div className="social-media">
         <p>  2021 Leelavathi Gade</p>
         <img src={CopyrightIcon}
         alt="copyright"
          width="50px" height="50px" />
         
         <p>Follow us on Social media</p>
         <img src={GitHubIcon} 
         alt="github"
         width="50px" height="50px" />
         

     </div>
        

       
    </div>
    )
}




