// src/components/Profile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserDetails } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const userDetails = useSelector((state) => state.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userDetails) {
            // If userDetails is not available, navigate back to the login page
            navigate('/');
        }
        else if (userDetails && userDetails.id) {
            fetch(`https://dummyjson.com/users/${userDetails.id}`)
                .then((res) => res.json())
                .then((data) => {
                    // Save user details to Redux state
                    dispatch(saveUserDetails(data));
                })
                .catch((error) => {
                    console.error('Error fetching user details:', error);
                });
        };
    }, [userDetails, dispatch, navigate]);


    return (
        <div>
            {userDetails ? (
                <div className='profile'>
                    <h2>User Profile</h2>
                    <img src={userDetails.image} alt='user'></img>
                    <p>Username: {userDetails.username}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
                    <p>Gender: {userDetails.gender}</p>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
