import React, {useState, useEffect} from 'react';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Languages from '../languages.json';
import axios from 'axios';
import './Signup.css';

import { Redirect } from 'react-router';








const initialLanguages = [
  {
    name: "",
    level: ""
  },
  {
    name: "",
    level: ''
  }
]

export default function Signup({user,setUser}) {
    
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [languages, setLanguages] = useState(initialLanguages);
    const [levels, setLevels] = useState([]);
    
    

    useEffect(() => {
      axios
      .get('https://thawing-dawn-59246.herokuapp.com/levels')
      .then(res => setLevels(res.data.data.sort((a, b) => {
        return a.step - b.step;
      })))
      .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
          userName,
          email,
          password,
          languages,
        };
        console.log(newUser)
    axios
        .post("https://thawing-dawn-59246.herokuapp.com/users", newUser)
        .then((res) => {
          setUser(res.data);
        }).catch((err)=> console.log(err, err.response));
  
      setUserName("");
      setEmail("");
      setPassword("");
      setLanguages([]);
      alert("Your registration is successful.");
    };

    const handleChangeLanguage = (e, index) => {
        const level = languages[index].level
        console.log(index)
        const newLanguages = languages.map((lang, langIndex) => {
          if (index === langIndex) {
            const native = levels[levels.length - 1]._id;
            return {
              name: e.target.value,
              level: index === 0 ? native : level
            }
          }
          return lang
        })

        setLanguages(newLanguages)
    };
    const handleChangeLevel = (e, index) => {
      const newLanguages = languages.map((lang, langIndex) => {
        return {
          name: lang.name,
          level: index === langIndex ? e.target.value : lang.level
        }
      })

      setLanguages(newLanguages)
    };




    console.log(languages)



    if(user)
   return (
     <Redirect to="/languages" />
   )

  return (

  <div className="signup-container">
    <h2 className="heading2">Sign Up </h2>

    <form  onSubmit={handleSubmit}>

    <div className="form-container"> 

     <TextField
		 id="username"
		 label="User name"
		 variant="filled"
		 value={userName}
		 onChange={(e) => setUserName(e.target.value)}
     
		style={{ marginBottom: "20px",marginTop:"20px", width:"300px", height:"50px"}}
		/>

    <TextField
		
		label="Email"
		variant="filled"
		value={email}
		onChange={(e) => setEmail(e.target.value)}
    className="email-textfield"
		style={{ marginBottom: "20px",marginTop:"20px", width:"300px", height:"50px"}}
		/>

    <TextField
		label="Password"
		variant="filled"
    type="password"
		value={password}
		onChange={(e) => setPassword(e.target.value)}
    style={{ marginBottom: "20px",marginTop:"20px", width:"300px"}}
		/>
    <p>Your Native Language </p><br></br>
        
    {languages.map((language, index) => {
      if (!index) {
        return (
          <FormControl variant="filled" sx={{ m: 1, minWidth: 10 }}>
          <InputLabel id="NativeLanguage"> your native language</InputLabel>
          <Select
          labelId="NativeLanguage"
          onChange={(e) => handleChangeLanguage(e, index)}
          style={{ marginBottom: "20px",marginTop:"20px", width:"300px", height:"50px"}}
          >{Languages.map((item)=> (
          <MenuItem value={item.name}>{item.name}</MenuItem>
          ))}
          </Select>
         </FormControl>
        )
      } else {
        return (
        <>
        {index === 1 ? <p>Languages To Practice</p> : ''}
        <FormControl variant="filled" sx={{ m: 1, minWidth: 10 }}>
        <InputLabel id="demo-simple-select-filled-label">practice language</InputLabel>
        <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        onChange={(e) => handleChangeLanguage(e, index)}
        style={{ marginBottom: "20px",marginTop:"20px", width:"300px", height:"50px"}}
        >{Languages.map((item)=> (
        <MenuItem value={item.name}>{item.name}</MenuItem>
        ))}
        </Select>
       </FormControl>
  
       <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="PracticeLanguage">level</InputLabel>
        <Select
        labelId="PracticeLanguage"
        onChange={(e) => handleChangeLevel(e, index)}
        style={{ marginBottom: "20px",marginTop:"20px", width:"300px", height:"50px"}}
        >
         <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {levels.map(level => (
              <MenuItem value={level._id}>{level.name}</MenuItem>
            ))}
        </Select>
       </FormControl>
       </>
       )
      }
    })}



            
        <Button type="submit"
        variant="contained"   
         style={{ color: "#1F4E5A",backgroundColor:"#5CE1E6", width:"300px" }} >
		Sign Up</Button>

        </div>
     </form>
    </div>


    )
}
