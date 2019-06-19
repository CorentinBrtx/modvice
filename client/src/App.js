import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Connect from './components/connect/Connect.js'
import Users from './components/users/Users.js'
import Movie from './components/movie/Movie.js'

function App() {
  return (
    <Router>
      <Route path="/connect" component={Connect} />
      <Route path='/user/:username' component={Users} />
      <Route path='/movie/:movie_title/:username' component={Movie} />
    </Router>
  );
}

export default App;

