import React, {useState, useEffect} from 'react';
import './Languages.css';


import {Link} from "react-router-dom";






export default function Languages() {



 


return (
  <div className="language-container">

   <h2 className="community-heading">Which Language community do you want to join </h2>
   {/* <TextField
        id="filled-basic"
        label="search"
        type="text"
        variant="filled"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px",marginTop:"20px", width:"300px"}}
       /> */}

   

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
            <h3> Namasthe</h3>

     
           <Link to= '/friends'>
           <button className="readbtn">Hindi </button>
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

         <Link to= '/friends'>
           <button className="readbtn">French </button>
        </Link>
        </div>
      </div>

      <div className="card">  
        <div className="card-div">
        <h3 >Hola</h3>

      

         <Link to= '/friends'>
           <button className="readbtn">Spanish </button>
         </Link>
       </div>
      </div>




      <div className="card"> 
         <div className="card-div">
            <h3 >nî hâo</h3>

     
           <Link to= '/friends'>
           <button className="readbtn">Chinese </button>
           </Link>


          </div>
      </div>


      <div className="card"> 
         <div className="card-div">
            <h3>Konnichiwa</h3>

     
           <Link to= '/friends'>
           <button className="readbtn">Japannese </button>
           </Link>


          </div>
      </div>
       
       
    </div>
  </div>
          
         
            
       
    )
}
