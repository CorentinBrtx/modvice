import React from 'react';
import './App.css';
import { homedir } from 'os';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home/Home.js'
import Connect from './components/connect/Connect.js'
import Users from './components/users/Users.js'
import Movie from './components/movie/Movie.js'


function App() {
  return (
    <Router>
      <Route path='/home/:username' component={Home} />
      <Route path="/connect" component={Connect} />
      <Route path='/user/:username' component={Users} />
      <Route path='/movie/:username/:movie_title' component={Movie} />
    </Router>
  );
}


export default App;

