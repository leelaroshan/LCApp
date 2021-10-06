import React from 'react';
import './Profile.css';
import userpic from './images/userpic.png';
import friendspic from './images/friends.png';



import {AiOutlineMail  } from "react-icons/ai";
// import MailIcon from '@material-ui/icons/Mail';



export default function Profile({user, setUser}) {

    
        
        
   
            
  if(user)
    return (
     
        <div className="profile-container">
          <div className="profile-div">
            <h4 className="details">Profile/ Details</h4>

            <div className=" img-bio"> 
            <img src={userpic}
            alt="profiepic"
            className="user-img" />
            


            <div className="bio"> 
            <h5 className="bio-name">{user.userName}</h5>
            <hr width="100%"  />
            <h5 className="learner">{user.languages[1].name} Learner</h5>
            <hr width="100%" />
            
            <h5 className="level"><AiOutlineMail className="email-icon" />  {user.email}</h5>

            <hr width="100%" />
            <h5 className="level">{user.languages[1].level.name}</h5>
            


            
            
            {/* <h5>{user.languages[0].name}</h5> */}
            
            


            </div>



            </div>


           
           
            <div className="friends-div">
            {/* <h5 >You connected with these people earlier</h5> */}
            <img src={friendspic}
            alt="your friends"
            className="friends-img" />
            <div  className="friends-card"> 
            <img 
            src={userpic} 
            alt="profilepic"
            className="profile-img" />
            <h3>userName </h3> 
            <hr  width="10%"/>
            </div>
            </div>

            

         </div>
       </div>
            )
        else 
        return(
            <div className="profile-div">
            <img src={userpic}
            alt="profiepic"
            className="user-img" />

            <img src={friendspic}
            alt="your friends"
            className="friends-img" />
            </div>

        )
            

           
            

            
        
    
}
