// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from './redux/reducers';
import Login from './Component/Login';
import Profile from './Component/Profile';

const store = createStore(userReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav id='navbar'>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

