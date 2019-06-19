import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/home/Home.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Connect from './components/connect/Connect.js'
import Users from './components/users/Users.js'


function App() {
  return (
    <Router>
      <Route path='/home' component={Home} />
      <Route path="/connect" component={Connect} />
      <Route path='/user' component={Users} />
      

    </Router>
  );
}

export default App;

