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

      <div className = "text-center p-5">
        <h2>Projects</h2>
        <p>These are my current projects. Learn more...</p>
        <div className = "row mb-5">
          <div className="col-sm-4">
            <div className="form white p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Gmail Chrome Extension</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form white p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Quizit</h5><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form white p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Light Tricks</h5>
            </div>
          </div>
        </div>
        <Link to="/experience" className="btn btn-primary">Learn More</Link>
      </div>

      <div className = "text-center p-5 white">
        <h2>Work Experience</h2>
        <p>My work expreience. Learn more...</p>
        <div className = "row mb-5">
          <div className="col-sm-4">
            <div className="form blue p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Lending Loop - Software Developer</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form blue p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Bank of Montreal - Infrastructure Engineer</h5><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form blue p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Quinn Dressel Associates - Engineering Student</h5>
            </div>
          </div>
        </div>
        <Link to="/experience" className="btn btn-primary">Learn More</Link>
      </div>

      <div className = "text-center p-5">
        <h2>Contact Me</h2>
        <p className="mb-5">Questions? or just want to chat? Contact me...</p>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;
