import { LineAxisOutlined } from '@mui/icons-material';
import { Zoom } from '@mui/material';
import { queries } from '@testing-library/react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, {useState} from 'react'

function Login() {
  
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(userName.length==0 && password.length==0)
        {
          setError(true);
        }
        if(userName && password)
        {
         const loginObj={
            name:userName,
            pwd:password
         }
         console.log(loginObj);
         alert(JSON.stringify(loginObj));
    }
  }
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username:<input type="text" value={userName} placeholder="Enter UserName" onChange={(e)=>setUserName(e.target.value)}/><br/>
    {error && userName.length==0 ?
    <label style={{color:'red'}}>UserName is Required</label>:""}<br/>
    Password:<input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
    {error && password.length==0 && password.length<=8 ?
      <label style={{color:'red'}}>Passsword should be minimum of 8 characters</label>:""}
      <br/><pre/>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login 