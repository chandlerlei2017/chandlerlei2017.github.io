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
          <div className="header">
            <div className="row text-right m-0">
              <div className="col-sm-12 text-right">
                <Link to="/" className="header-link ml-4 mr-4">Home</Link>
                <Link to="/about" className="header-link ml-4 mr-4">About</Link>
                <Link to="/experience" className="header-link ml-4 mr-4">Experience</Link>
                <Link to="/contact" className="header-link ml-4 mr-4">Contact</Link>
              </div>

              <hr />
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </Router>
  );
}

export default Homepage;
