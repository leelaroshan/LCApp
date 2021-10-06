import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';


import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Languages from './components/Languages';
import Profile from './components/Profile';
import Friends from './components/Friends';
import Search from './components/Search';
// import Email from './components/Email';

import { useHistory } from 'react-router';


import Footer from './components/Footer';


function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          setIsLoggedIn(true);
        })
        .catch(err => console.log('err', err));
    }


  }, []);

  const login = newUser => {
    axios
      .post('https://thawing-dawn-59246.herokuapp.com/users/login', newUser)
      .then(res => {
        const { data } = res.data;
        setUser(data);
        setIsLoggedIn(true);
        localStorage.setItem('token', res.data.token);
        history.push('/languages');
      })
      .catch(err => console.log(err, err.response));
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
          <Route path='/friends/:language'>
            <Friends  user={user} />
          </Route>
          <Route exact path='/profile'>
            <Profile setUser={setUser} user={user} />
          </Route>
          <Route exact path='/search'>
            <Search setUser={setUser} user={user} />
          </Route>

        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
