import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.scss';

function Home() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Chandler Lei</h1>
          <p>Pushing Limits</p>
        </div>
      </div>

      <div className = "text-center p-5 white">
        <p>"It does not matter how slowly you go as long as you do not stop." Me: 2018</p>
      </div>

      <div className = "text-center p-5 white">
        <h2>About Me</h2>
        <p>Who am I? What Do I like to do? Learn More...</p><br/><br/><br/><br/>
        <Link to="/about" className="ml-2 mr-2">About Me</Link>
      </div>

      <div className = "text-center p-5">
        <h2>Projects</h2>
        <p>These are my current projects. Learn more...</p>
        <div className = "row">
          <div className="col-sm-4">
            <div className="form white p-3 ml-3 mr-3 transition-3d-hover">
              <p>Gmail Chrome Extension</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form white p-3 ml-3 mr-3 transition-3d-hover">
              <p>Quizit</p><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form white p-3 ml-3 mr-3 transition-3d-hover">
              <p>Light Tricks</p>
            </div>
          </div>
        </div>
        <Link to="/experience" className="ml-2 mr-2">Experience</Link>
      </div>

      <div className = "text-center p-5 white">
        <h2>Work Experience</h2>
        <p>My work expreience. Learn more...</p>
        <div className = "row">
          <div className="col-sm-4">
            <div className="form blue p-3 ml-3 mr-3 transition-3d-hover">
              <p>Lending Loop - Software Developer</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form blue p-3 ml-3 mr-3 transition-3d-hover">
              <p>Bank of Montreal - Infrastructure Engineer</p><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form blue p-3 ml-3 mr-3 transition-3d-hover">
              <p>Quinn Dressel Associates - Engineering Student</p>
            </div>
          </div>
        </div>
        <Link to="/experience" className="ml-2 mr-2">Experience</Link>
      </div>

      <div className = "text-center p-5">
        <h2>Contact Me</h2>
        <p>Questions? or just want to chat? Contact me...</p><br/><br/><br/><br/>
        <Link to="/contact" className="ml-2 mr-2">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;
