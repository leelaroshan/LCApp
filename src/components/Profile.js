import React from 'react';
import './Profile.css';
import profilepic from './images/profilepic.png';
import friendspic from './images/friends.png'



export default function Profile({user, setUser}) {

    console.log(user);
    
        
        
            
{/*             
         {user && ( )}     */}
            
        if(user)
      return (
     
        <div className="profile-container">
            <div className="profile-div">
            <h4>{user.userName}</h4>

            <img src={profilepic}
            alt="profiepic"
            className="user-img" />
           
            <div className="friends-div">
                
            <h5>You connected with these people earlier</h5>
            <img src={friendspic}
            alt="your friends"
            className="user-img" />
            <div  className="friends-card"> 
            <img 
            src={profilepic} 
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
            <img src={profilepic}
            alt="profiepic"
            className="user-img" />

            <img src={friendspic}
            alt="your friends"
            className="user-img" />
            </div>

        )
            

           
            

            
        
    
}
