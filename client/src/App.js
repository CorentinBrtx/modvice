import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

import Users from './components/users/Users.js'

function App() {
  return (
    <Router>
      <Route path='/user' component={Users} />
    </Router>
  );
}

export default App;

