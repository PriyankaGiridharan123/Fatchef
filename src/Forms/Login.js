import React, {useState} from 'react'

function Login() {
  document.title="bowbow";
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const formHandler=(event)=>
    {
        event.preventDefault();
         const loginObj={
            name:userName,
            pwd:password
         }
         console.log(loginObj);
         alert(JSON.stringify(loginObj));
    }
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username:<input type="text" value={userName} placeholder="Enter UserName" onChange={(e)=>setUserName(e.target.value)}/><br/>
    Password:<input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/><br/><pre/>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login

