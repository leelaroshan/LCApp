

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import React, { useEffect, useRef, useState } from 'react';



import './Chat.css';

export default function Chat({
  user,
  socket,
  stream,
  myVideo,
  userVideo,
  leaveCall,
  setStream,
  receivingCall
}) {
  // console.log(
  //   'inside chat - userVideo - user - socket - stream - myVideo - leaveCall - setStream',
  //   userVideo,
  //   user,
  //   socket,
  //   stream,
  //   myVideo,
  //   leaveCall,
  //   setStream
  // );
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio:  { ecoCancellation:true} })
      .then(stream => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      })
      .catch(err => console.log(err));
  }, []);


  if(userVideo){  
    return(
      <>
      <h1></h1>
      <div className='container'>
        <div className='video-container'>
          <div className='video'>
            {stream && (
              <video
               
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="myvideo"
                style={{ width: '200px',height:'200px',borderRadius:'50%!important' }}
              />
            )}
          </div>

         
          <div className='receipnt-video'>
            <video
            
              playsInline
              ref={userVideo}
              autoPlay
              style={{ width: '500px' ,height:'500px'}}
            />
            <Button className="end-icon"
            variant='contained' 
            color='secondary' 
            style={{ width: '120px',height:'40px',marginBottom: '50px' }}
            
            onClick={leaveCall}>
          End Call
          </Button>
          </div>
        </div>

       
      </div>
      
     
        
    </>

  )
}



  else 
  {return(<div>
     <div className='video'>
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: '300px',height:'300px', borderRadius:"50%" }}
              />
            )}
          </div>

  </div>);

  }



}