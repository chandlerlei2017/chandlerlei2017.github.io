import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Projects from './pages/Projects.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Homepage() {
  return (
    <Router>
      <div class="row text-center">
        <div class="col-sm-3">
          <Link to="/">Home</Link>
        </div>
        <div class="col-sm-3">
          <Link to="/projects">Projects</Link>
        </div>
        <div class="col-sm-3">
          <Link to="/about">About Me</Link>
        </div>
        <div class="col-sm-3">
          <Link to="/contact">Contact Me</Link>
        </div>

        <hr />
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default Homepage;
