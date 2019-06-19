import React from 'react';
import logo from './logo.svg';
import './App.css';
import { homedir } from 'os';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/search/Search.js'

import Home from './components/home/Home.js'
import Connect from './components/connect/Connect.js'
import Users from './components/users/Users.js'


function App() {
  return (
    <Router>
      <Route path='/home' component={Home} />
      <Route path="/connect" component={Connect} />
      <Route path='/user' component={Users} />
      <Route path="/" component={Search} />
    </Router>
  );
}


export default App;

