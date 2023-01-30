import React, { useState } from 'react'
import './frame1.css'
import { Feedback } from '@mui/icons-material';

function Login() {
    const[username,setusername]=useState('');
    const[email,setemail]=useState('');
    const[comment,setcomment]=useState('');
    const[error,seterror]=useState(false);
    const formHandler=(event)=>
    { 
      event.preventDefault();
          if(username.length===0 || email.length===0 || comment.length===0)
          {
            seterror(true);
          }
          if(username && email && comment)
          {
          const loginObj={
            name:username,
            Email:email,
            Comment:comment
          }
          console.log(loginObj);
          alert(JSON.stringify(loginObj));
          }
    }
  return (
    
    <div class = "form">
    <div class="feedback">
    <h1><u>FEEDBACK!</u></h1>
    </div>
    <div class="sub">
    <form onSubmit={formHandler}>
    <h3>Username:<input type="text" value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)}/></h3>
    {error && username == 0?
    <label style = {{color:"red"}}> Username is required</label>:""}<br></br>
    <h3>Email:<input type="email"  value ={email} placeholder="Email Id" onChange={(e)=>setemail(e.target.value)}/></h3>
    {error && email ==0?
    <label style = {{color:"red"}}>Email is required</label>:""}<br></br>
    <h3>Comments:<input type="textarea"  value ={comment} placeholder="Comments " onChange={(e)=>setcomment(e.target.value)}/></h3>
    {error && comment == 0?
    <label style = {{color:"red"}}>Comments pls</label>:""}<br></br>
    <button  type="submit">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Login