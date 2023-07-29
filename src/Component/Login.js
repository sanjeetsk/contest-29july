// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserDetails } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Add error state
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
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
                    setError("Please enter valid userName or Password ");
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                // Login successful, save user details to Redux state
                    dispatch(saveUserDetails(data));
                    navigate('/profile');
                // Redirect the user to the profile page
                } else {
                // Show the error from the API in the frontend
                  setError(data.error);
                }
            })
            .catch((error) => {
                console.error('Error during login:', error.message);
            });
    };


    return (
        <form className='login' onSubmit={handleLogin}>
            <p>Welocome Back</p>
            <h2>Sign in to your account</h2>
            <label htmlFor='username'>Username</label>
            <input
                type="text"
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <br></br>
            <label htmlFor='password'>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <br></br>
            <button type='submit'>Log In</button>
            <div className="error">{(error && error)}</div>
        </form>
    );
};

export default Login;
