import React, { useState, useEffect, useRef } from 'react';
import './Friends.css';
import axios from 'axios';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import Chat from '../components/video-chat/Chat';
import AcceptVideocall from '../components/video-chat/AcceptVideocall';


import profilepic from './images/profilepic.png';
import Loader from 'react-loader-spinner';

const socket = io.connect('https://thawing-dawn-59246.herokuapp.com/');

export default function Friends({ user }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // video chat states
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();


  useEffect(() => {
    axios
      .get('https://thawing-dawn-59246.herokuapp.com/users', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        setFriends(res.data.data);
        setLoading(false);
      })
      .catch(console.error);

      socket.emit('join', user._id);

      socket.on('callUser', data => {
        console.log('callUser - data.from', data.from);
        console.log('callUser - user._id', user);
        setReceivingCall(true);
        setCaller(data.from);
        setName(data.name);
        setCallerSignal(data.signal);
      });
  }, []);

  const callUser = id => {
    console.log(id);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    });

    peer.on('signal', data => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: user._id,
        name: user.userName
      });
    });

    peer.on('stream', stream => {
      console.log('peer on stream', stream);
      userVideo.current.srcObject = stream;
    });

    socket.on('callAccepted', signal => {
      console.log('call accepted');
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };

  const answerCall = () => {
    console.log('answer call');
    setCallAccepted(true);

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream
    });

    peer.on('signal', data => {
      console.log('caller', caller);
      socket.emit('answerCall', { signal: data, to: caller });
    });

    peer.on('stream', stream => {
      console.log('peer on stream', stream);
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  if (loading)
    return <Loader type='Oval' color='teal' height={150} width={150} />;

  return (
    <div className='big-container'>
      <h3>your community friends are here</h3>
      {receivingCall && <AcceptVideocall answerCall={answerCall} />}
          <Chat
            user={user}
            socket={socket}
            myVideo={myVideo}
            userVideo={userVideo}
            stream={stream}
            leaveCall={leaveCall}
            setStream={setStream}
          />
      <div className='user-container'>
        {friends.length &&
          friends.map((friend, index) => (
            <div className='user-card' key={index}>
              <img src={profilepic} alt='profilepic' className='profile-img' />
              <h4 key={index}>{friend.userName} </h4>
              <hr width='30%' />
              <h5> Native: {friend.languages[0]?.name}</h5>
              {friend.languages.slice(1).map((language, i) => {
                return <h5 key={i}>Practice languages: {language.name}</h5>;
              })}
              {/* <h5>Practice Language: {friend.languages[1]?.name}</h5> */}
              <h6>Level: {friend.languages[0]?.level?.name}</h6>
              <button
                className='connect-btn'
                onClick={() => callUser(friend._id)}
              >
                Connect
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
