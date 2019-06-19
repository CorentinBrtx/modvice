import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Connect from './components/connect/Connect.js'

function App() {
  return (
    <Router>
      <Route path="/connect" component={Connect} />
    </Router>
  );
}

export default App;
