
import './App.css';
import { Switch,Route } from 'react-router-dom';


import { useState} from 'react';
import Navbar  from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Languages from './components/Languages';
import Profile from './components/Profile';
import Friends from './components/Friends';
import Chat from './components/video-chat/Chat'


import Footer from './components/Footer';
// import { SettingsInputSvideoRounded } from '@material-ui/icons';



function App() {

  const [user, setUser] = useState();



  return (
   <div className="App">
    <div className="container"> 
      <header>
       <Navbar />
      </header>
      <Switch>
       <Route exact path="/" >
        <Login setUser= {setUser} user={user}/>
       </Route>
       <Route exact path="/signup" >
        <Signup setUser= {setUser} user={user}/>
       </Route>
       <Route  path="/languages" component={Languages} />
       <Route  path="/friends" component={Friends} />
       <Route exact path="/profile" >
        <Profile setUser= {setUser} user={user}/>
       </Route>
       {/* <Route  path="/profile" component={Profile} /> */}

       <Route  path="/chat" component={Chat} />

      </Switch>

      <footer>
        <Footer />
      </footer>
     
      </div>
    </div>
  );
}

export default App;
