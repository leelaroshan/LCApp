import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';
import Peer from 'simple-peer';

import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Languages from './components/Languages';
import Profile from './components/Profile';
import Friends from './components/Friends';
import Search from './components/Search';
import AcceptVideocall from './components/video-chat/AcceptVideocall';


import { useHistory } from 'react-router';

import Chat from './components/video-chat/Chat';

import Footer from './components/Footer';



const socket = io.connect('https://thawing-dawn-59246.herokuapp.com/');

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  let history = useHistory();

  useEffect(() => {
    const cachedToken = localStorage.getItem('token');

    if (cachedToken) {
      setToken(cachedToken);

      axios
        .get('https://thawing-dawn-59246.herokuapp.com/me', {
          headers: {
            authorization: `Bearer ${cachedToken}`
          }
        })
        .then(res => {
          const { data } = res.data;
          setUser(data);
          socket.emit('join', data._id);
          setIsLoggedIn(true);
        })
        .catch(err => console.log('err', err));
    }

    socket.on('callUser', data => {
      console.log('callUser - data.from', data.from);
      console.log('callUser - user._id', user);
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const login = newUser => {
    axios
      .post('https://thawing-dawn-59246.herokuapp.com/users/login', newUser)
      .then(res => {
        const { data } = res.data;
        setUser(data);
        socket.emit('join', data._id);
        setIsLoggedIn(true);
        localStorage.setItem('token', res.data.token);
        history.push('/languages');
      })
      .catch(err => console.log(err, err.response));
  };

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

  return (
    <div className='App'>
      <div className='container'>
        <header>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
       
        </header>
        <Switch>
          <Route exact path='/'>
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route exact path='/login'>
            <Login
              setUser={setUser}
              user={user}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              login={login}
            />
          </Route>

          <Route exact path='/signup'>
            <Signup
              setUser={setUser}
              user={user}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>

          <Route path='/languages' component={Languages} />
          <Route path='/friends'>
            <Friends callUser={callUser} />
          </Route>
          <Route exact path='/profile'>
            <Profile setUser={setUser} user={user} />
          </Route>
          <Route  path='/search'>
            <Search  user={user} callUser={callUser} />
          </Route>

          {/* <Route path='/chat'>
            <Chat
              user={user}
              socket={socket}
              myVideo={myVideo}
              userVideo={userVideo}
              stream={stream}
              leaveCall={leaveCall}
              setStream={setStream}
            />
          </Route> */}

          {/* <div class="receivingCall">
           {receivingCall ?  (<NavLink to="/chat"><button onClick={answerCall}>Answer Call</button></NavLink> )  : "no call in progress"}
        </div>  */}
        </Switch>
        { receivingCall && <AcceptVideocall  user={user} answerCall={answerCall} leaveCall={leaveCall} />}

         { isLoggedIn && 

         
          <Chat 
            user={user}
            socket={socket}
            myVideo={myVideo}
            userVideo={userVideo}
            stream={stream}
            leaveCall={leaveCall}
            setStream={setStream}
            receivingCall={receivingCall}
          />
          
         }
       

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;