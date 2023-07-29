// src/components/Profile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserDetails } from '../redux/actions';

const Profile = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails && userDetails.id) {
      fetch(`https://dummyjson.com/users/${userDetails.id}`)
        .then((res) => res.json())
        .then((data) => {
          // Save user details to Redux state
          dispatch(saveUserDetails(data));
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [userDetails, dispatch]);

  return (
    <div>
      {userDetails ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <p>Other details...</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
