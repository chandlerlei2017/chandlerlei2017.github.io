import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Experience() {
  return (
    <div>
      <div className="hero-image hero-experience">
        <div className="hero-text">
          <h1>What I've done so far...</h1>
          <p>Here is my coding experience along with some of the work I am most proud of!</p>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-center">Work Experience</h2>
        <p className="text-center">These are some of the places I worked!</p>
        <div className="col-sm-10 offset-sm-1 mb-5">
          <div className="row">
            <div className="col-sm-8 pr-2 mb-5">
             <div className="form p-3 white">
               <h3 className="ll-colour">Lending Loop</h3>
               <hr className="ll-divider mb-4"/>

               <h5>What I did there</h5>
               <p>This will either be a paragraph or a "ul" of my job responsibilities</p>
               <br/><br/><br/><br/>

               <h5>Technologies used</h5>
               <p>This will either be a paragraph or a "ul" of the tech I used</p>
               <br/><br/><br/><br/>
             </div>
            </div>

            <div className="col-sm-4 pl-2 mb-5 employment">
              <div className="form ll-bg text-center p-2">
                  <p className="mb-0 white-text">Software Developer</p>
              </div>
              <div className="form p-3 white">
              </div>
            </div>

            <div className="col-sm-4 pr-2 mb-5 employment">
              <div className="form ll-bg text-center p-2">
                  <p className="mb-0 white-text">Infrastructure Engineer</p>
              </div>
              <div className="form p-3 white">
              </div>
            </div>

            <div className="col-sm-8 pl-2 mb-5">
             <div className="form p-3 white">
               <h3 className="ll-colour">Bank of Montreal</h3>
               <hr className="ll-divider mb-4"/>

               <h5>What I did there</h5>
               <p>This will either be a paragraph or a "ul" of my job responsibilities</p>
               <br/><br/><br/><br/>

               <h5>Technologies used</h5>
               <p>This will either be a paragraph or a "ul" of the tech I used</p>
               <br/><br/><br/><br/>
             </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "text-center p-5 white">
        <h2>Projects</h2>
        <p>These are my current projects. Learn more...</p>
        <div className = "row mb-5">
          <div className="col-sm-4">
            <div className="project-card white p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Gmail Chrome Extension</h5>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="project-card white p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Quizit</h5><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="project-card white p-3 ml-3 mr-3 transition-3d-hover">
              <h5>Light Tricks</h5>
            </div>
          </div>
        </div>
        <Link to="/projects" className="btn btn-primary-blue">Learn More</Link>
      </div>

      <div className="p-5">
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
