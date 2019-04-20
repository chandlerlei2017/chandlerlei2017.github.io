import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Experience from './pages/Experience.js'
import Projects from './pages/Projects.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from './assets/logo.png'

library.add(faPhone)
library.add(faEnvelope)

function Homepage() {
  return (
      <Router>
          <div className="header">
            <div className="row text-right m-0">
              <div className="col-sm-2 text-left">
                <Link to="/">
                  <img src={logo} className="logo" />
                </Link>
              </div>
              <div className="col-sm-10 text-right">
                <Link to="/" className="header-link mr-4">Home</Link>
                <Link to="/about" className="header-link ml-4 mr-4">About</Link>
                <Link to="/experience" className="header-link ml-4 mr-4">Experience</Link>
                <Link to="/contact" className="header-link ml-4">Contact</Link>
              </div>

              <hr />
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
      </Router>
  );
}

export default Homepage;
