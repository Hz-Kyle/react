import React, { useState } from 'react'

const Login = () =>{
    const [username, setUserName ] = useState("")
    const [password, setPassword ] = useState("")

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        console.log("Typed password" + e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`Username: ${username} Password: ${password}`)
    }


  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit= {submitHandler}>
        <label>Username</label>
        <input type="text" placeholder='username' value= {username} 
        onChange= {(e) => {
            console.log("Typed Value" + e.target.value)
            setUserName(e.target.value)
        }}
        />
      
       
        <label>Password</label>
        <input type="text" placeholder='password' value={password} onChange={passwordHandler} />

        <button type='submit'>Submit</button>
        </form>
        <p>login User:{username}</p>
    </div>
  )
    }

export default Login