import React, {useState,useEffect} from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';
import profilepic from './images/profilepic.png';
import Loader from "react-loader-spinner";
import './Searchuser.css';


const BASE_ROOT = "http://localhost:5000/users/searchUser?lang=" ;
const ROOT = "http://localhost:5000/users" ;


export default function Search({ callUser, user }) {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = user ?  `${BASE_ROOT}${user.languages[0]?.name}&nativeLang=${user.languages[1]?.name} ` : `${ROOT}`

    console.log(url);

   useEffect(()=>{
     axios
      .get(url ,{
         headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
         }
        })
       .then((res)  => {
        
        setFriends(res.data.data)
        setLoading(false);
         })
        .catch(console.error);

    }, [])

   if (loading)
     return <Loader type="Oval" color="teal" height={150} width={150} />;

     return (
        <div className="big-container">
        <h3 >your community friends are here</h3>
        <div className="user-container">  
        
        
        { friends.length  && (friends.map((friend,index)=> (
            
            <div  className="user-card" key={index}> 
            <img 
            src={profilepic} 
            alt="profilepic"
            className="profile-img" />
            
            <h4 key={index}>{friend.userName} </h4> 
            <hr width="30%"/>
            <h5> Native: {friend.languages[0]?.name}</h5>
           {friend.languages.slice(1).map((language, i) => {
           return  <h5 key={i}>Practice languages: {language.name}</h5>
           })}
            {/* <h5>Practice Language: {friend.languages[1]?.name}</h5> */}
            <h6>Level: {friend.languages[0]?.level?.name}</h6>
            <Link to= '/chat'> 
            <button className="connect-btn" onClick={() => callUser(friend._id)}>Connect</button>
            </Link>
            </div>

          )
          )
         )
        }   
    </div>
    
    </div>
    )
}
