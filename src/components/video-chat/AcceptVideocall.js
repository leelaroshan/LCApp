

import React from 'react';
import { NavLink } from 'react-router-dom';
import './AcceptVideocall.css';




export default function AcceptVideocall({user, answerCall, leaveCall}){


 

    return (
        <div className="video-container">
            <div className="box">
              <h4>someone is calling You ...</h4>

              <div className="buttons-div"> 

              <NavLink to="/chat"> 
              <button className="accept-btn" onClick={answerCall}> Accept Call </button>
              </NavLink>

              <NavLink to="/"> 
             
               <button className="decline-btn" onClick={leaveCall} >Decline Call</button>
              </NavLink>
              </div>

            </div>


        </div>
    )
 
}

