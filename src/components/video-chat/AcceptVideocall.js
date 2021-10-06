

import React from 'react';
import { NavLink } from 'react-router-dom';
import './AcceptVideocall.css';




export default function AcceptVideocall({answerCall}){


 

    return (
        <div className="video-container">
            <div className="box">
              <h4>Someone  is calling You ...</h4>

              <div className="buttons-div"> 

              <button className="accept-btn" onClick={answerCall}> Accept Call </button>

              <button className="decline-btn">Decline Call</button>

              </div>

            </div>


        </div>
    )
 
}

