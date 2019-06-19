import React from 'react';
import logo from './logo.svg';
import './App.css';
import { homedir } from 'os';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/search/Search.js'

function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Search} />
    </div>
  </Router>
  );
}


export default App;
