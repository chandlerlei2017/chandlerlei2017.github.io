import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Experience from './pages/Experience.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Homepage() {
  return (
    <Router>
        <div className="row text-center m-3">
          <div className="col-sm-12 text-right">
            <Link to="/" className="ml-2 mr-2">Home</Link>
            <Link to="/about" className="ml-2 mr-2">About Me</Link>
            <Link to="/projects" className="ml-2 mr-2">Experience</Link>
            <Link to="/contact" className="ml-2 mr-2">Contact Me</Link>
          </div>

          <hr />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Experience} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default Homepage;
