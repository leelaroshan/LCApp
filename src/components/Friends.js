import React, {useState,useEffect} from 'react';
import './Friends.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import profilepic from './images/profilepic.png';

export default function Friends() {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    axios
    .get("https://thawing-dawn-59246.herokuapp.com/users")
    .then((res)  => {
        
        setFriends(res.data.data)
        setLoading(false);
    })
    .catch(console.error);

    }, [])

 console.log(friends);

   if (loading)
    return <p> is loading ....</p>;

    return (
        <div className="big-container">
        <h3 >your community friends are here</h3>
        <div className="user-container">  
        
        
        { friends.length  && (friends.map((friend,index)=> (
            <>
            <div  className="user-card"> 
            <img 
            src={profilepic} 
            alt="profilepic"
            className="profile-img" />
            <h4 key={index}>{friend.userName} </h4> 
            <hr width="30%"/>
            <h5> Native: {friend.languages[0]?.name}</h5>
           {friend.languages.slice(1).map(language => {
           return  <h5>Practice languages: {language.name}</h5>
           })}
            {/* <h5>Practice Language: {friend.languages[1]?.name}</h5> */}
            <h6>Level: {friend.languages[0]?.level?.name}</h6>
            <Link to= '/chat'> 
            <button className="connect-btn">Connect</button>
            </Link>
            </div>

            </>
        )
        )
        )
        }   
    </div>
    
    </div>
    )
}
