import Button from "@material-ui/core/Button";
import  IconButton  from "@material-ui/core/IconButton";

import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";
import React,{useEffect,useRef,useState} from "react";


import Peer from "simple-peer";
import io from "socket.io-client";

import './Chat.css';



export default function Chat({user, socket, stream, myVideo, userVideo, leaveCall, setStream }) {

  console.log('inside chat - userVideo - user - socket - stream - myVideo - leaveCall - setStream', userVideo, user, socket, stream, myVideo, leaveCall, setStream)
  useEffect( ()=>{
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then((stream)=>{
      setStream(stream)
      myVideo.current.srcObject = stream
    })
    .catch((err) => console.log(err))


  },[])


  return (
    <>
      <h1>Video Call</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && <video playsInline muted ref={myVideo} autoPlay style={{width: "300px" }} />}
          </div>
          <div className="video">
            <video playsInline ref={userVideo} autoPlay style={{width:"300px"}}/>
          </div>
        </div>
  
         <Button variant="contained" color="secondary" onClick={leaveCall}>
           End Call
         </Button>
      </div>
    </>
  )}

