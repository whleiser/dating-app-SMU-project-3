import React, {useRef} from "react";
import API from "../utils/API";
import {
  Text,
  Box
} from 'rebass';
import { useHistory } from "react-router-dom";



function Login({setUser}) {
    let history = useHistory();
    const emailInput = useRef("");
    const passwordInput = useRef("");
    function login (event) {
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
         API.logIn({email: emailInput.current.value, password: passwordInput.current.value})
         .then(response => {history.push("/matches")
        setUser(response.data)})
        event.preventDefault()  
    }
  return (
    <Box
    sx={{
    maxWidth: 512,
    mx: 'auto',
    px: 3,
    }}>
<div class="col-md-6 col-md-offset-3">
        <h2>Login Form</h2>
        <form className="login" onSubmit = {login}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" ref = {emailInput}/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" ref = {passwordInput}/>
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
        <br />
        <p>Or sign up <a href="/create">here</a></p>
      </div>
    </Box>
  );
}

export default Login;