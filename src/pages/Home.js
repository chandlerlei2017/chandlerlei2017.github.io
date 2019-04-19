import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.scss';
import image from '../assets/temp_about.jpg'

function Home() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Chandler Lei</h1>
          <p>Pushing Limits</p>
        </div>
      </div>

      <div className = "text-center p-5">
        <p>"It does not matter how slowly you go as long as you do not stop." Me: 2018</p>
      </div>

      <div className = "p-5 white">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-sm-4 p-3">
            <img src={image} className="img-fluid rounded"/>
          </div>
          <div className="col-sm-8 mt-3">
            <h5 className="mb-3">Name: Chandler Lei</h5>
            <h5 className="mb-3">University: University of Waterloo</h5>
            <h5 className="mb-3">Program: Computer Engineering</h5>
            <h5 className="mb-3">Year: 2A</h5>
            <p>Want to learn more about me? What I am like? What my passions are? </p>
            <Link to="/about">About Me</Link>
          </div>
        </div>
      </div>

      <div className = "text-center p-5">
        <h2>Projects</h2>
        <p>These are my current projects. Learn more...</p>
        <div className = "row mb-5">
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
        <Link to="/experience">Experience</Link>
      </div>

      <div className = "text-center p-5 white">
        <h2>Work Experience</h2>
        <p>My work expreience. Learn more...</p>
        <div className = "row mb-5">
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
        <Link to="/experience">Experience</Link>
      </div>

      <div className = "text-center p-5">
        <h2>Contact Me</h2>
        <p>Questions? or just want to chat? Contact me...</p><br/><br/><br/><br/>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;
