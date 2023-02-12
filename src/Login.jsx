import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Register from './Register';

const Login = () => {
    const goNext = () => {
        return(
          <>
          <Register />
          </>
        );
    }
 return(
    <form onSubmit={goNext}>
    <h2>Login Page</h2>
    <TextField
            label="Email"
            id="outlined-size-normal"
            
            variant="outlined"
            placeholder="Enter Email here"
          />
           <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button variant="outlined" color="secondary" type="Submit" >
          Login
        </Button> 
        </form> 
    
 );
}

export default Login;