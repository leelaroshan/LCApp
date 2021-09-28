import React from 'react';
import './Languages.css';
import {Link} from "react-router-dom";





export default function Languages() {
return (
  <div className="language-container">

   <h2 className="community-heading">Which Language community do you want to join </h2>

    <div className="background"> 
      
      <div className="card"> 
      <div className="card-div">
      <h3 >Guten Tag</h3>
      <Link to= '/friends'>
           <button className="readbtn">German </button>
      </Link>
      </div>
      </div>
     
      
      <div className="card"> 
      <div className="card-div">
      <h3 >Hallo</h3>
      <Link to= '/friends'>
           <button className="readbtn">English </button>
      </Link>
      </div>
      </div>
      <div className="card"> 
      <div className="card-div">
      <h3 >Salve</h3>

      {/* <img  src="" 
      width="200px" height="200px" 
      alt="german"
      className="card-img" />  */}
      <Link to= '/friends'>
           <button className="readbtn">Italian </button>
      </Link>


      </div>
      </div>
        
      <div className="card">  
      <div className="card-div">
      <h3 >Bonjour</h3>

      {/* <img  src="" 
      width="200px" height="200px" 
      alt="german"
      className="card-img" />  */}

     <Link to= '/friends'>
           <button className="readbtn">French </button>
      </Link>
      </div>
      </div>

      <div className="card">  
      <div className="card-div">
      <h3 >Hola</h3>

      {/* <img  src="" 
      width="200px" height="200px" 
      alt="german"
      className="card-img" />  */}

     <Link to= '/friends'>
           <button className="readbtn">Spanish </button>
      </Link>
      </div>
      </div>
       
       
    </div>
  </div>
          
         
            
       
    )
}
