import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Experience() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>What I've done so far...</h1>
          <p>Here is my coding experience along with some of the work I am most proud of!</p>
        </div>
      </div>

      <div className="p-5 white">
        <h2 className="mb-5">Work Experience</h2>

        <div className="mb-5">
          <h5>Lending Loop</h5>
          <h6>Software Developer</h6>
        </div>

        <div className="mb-5">
          <h5>Bank of Montreal</h5>
          <h6>Infrastructure Engineer</h6>
        </div>
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
        <Link to="/experience" className="btn btn-primary-blue">Learn More</Link>
      </div>

      <div className="p-5 white">
        <h2 className="mb-5">Competitions/Hackathons</h2>

        <div className="mb-5">
          <h5>Business Development Bank of Canada Hackathon</h5>
          <h6>March 2019</h6>
        </div>

        <div className="mb-5">
          <h5>Big Data Challenge</h5>
          <h6>Februrary 2017</h6>
        </div>
      </div>
    </div>
  );
}

export default Experience;
