// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserDetails } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        })
    })
    .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        // if (data.status === 200) {
          // Login successful, save user details to Redux state
          console.log(data);
          dispatch(saveUserDetails(data));
          // Redirect the user to the profile page
          // (You can use a routing library like react-router-dom for this)
        // } else {
          // Show the error from the API in the frontend
        //   console.log(data.error);
        // }
        navigate('/profile'); 
    })
    .catch((error) => {
        console.error('Error during login:', error.message);
    });
  };
  

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
