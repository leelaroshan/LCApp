import React, {useState,useEffect} from 'react';
import './Friends.css';
import axios from 'axios';
import profilepic from './images/profilepic.png'

export default function Friends() {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    axios
    .get("http://localhost:5000/users")
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
            <h3 key={index}>{friend.userName} </h3> 
            <hr />
            <h5> Native: {friend.languages[0]?.name}</h5>
           {friend.languages.slice(1).map(language => {
           return  <h5>Practice languages: {language.name}</h5>
           })}
            {/* <h5>Practice Language: {friend.languages[1]?.name}</h5> */}
            <h6>Level: {friend.languages[0]?.level?.name}</h6>
            <button className="connect-btn">Connect</button>
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
