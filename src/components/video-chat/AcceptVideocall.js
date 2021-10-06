

import React from 'react';
import { NavLink } from 'react-router-dom';
import './AcceptVideocall.css';




export default function AcceptVideocall({answerCall, caller}){


 console.log("call user", caller.user._id.userName)

    return (
        <div className="video-container">
            <div className="box">
              <h4> {caller.user._id.userName} is calling You ...</h4>


              <div className="buttons-div"> 

              <button className="accept-btn" onClick={answerCall}> Accept Call </button>

              <button className="decline-btn">Decline Call</button>

              </div>

            </div>


        </div>
    )
 
}

