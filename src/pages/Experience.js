import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import lendingloop from "../assets/lending-loop.png"
import bmo from "../assets/bmo.png"
import BDChack from "../assets/BDC_hack.jpg"
import BigData from "../assets/Big_data.jpg"

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
        <p className="text-center">These are some of the places I've worked!</p>
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-8 pr-2 mb-5">
             <div className="form p-3 white">
               <h3 className="ll-colour">Lending Loop</h3>
               <hr className="ll-divider mb-4"/>

               <h5 className="ll-text">What I did there</h5>
               <p>This will either be a paragraph or a "ul" of my job responsibilities</p>
               <br/><br/><br/><br/>

               <h5 className="ll-text">Technologies used</h5>
               <p>This will either be a paragraph or a "ul" of the tech I used</p>
               <br/><br/><br/><br/>
             </div>
            </div>

            <div className="col-sm-4 pl-2 mb-5 employment text-center">
              <div className="form ll-bg p-2 employment-label">
                <h5 className="mb-0">Software Developer</h5>
              </div>
              <div className="form p-3 white">
                <h6 className="mb-4">January - April 2019</h6>
                <img src={lendingloop} className="img-fluid rounded mb-4"/>
                <p>Lending Loop is Canada's first and only regulated peer-to-peer lending marketplace focused on small business.</p>
              </div>
            </div>

            <div className="col-sm-4 pr-2 mb-5 employment text-center">
              <div className="form bmo-bg p-2 employment-label">
                  <h5 className="mb-0">Infrastructure Engineer</h5>
              </div>
              <div className="form p-3 white">
                <h6 className="mb-4">May - August 2018</h6>
                <img src={bmo} className="img-fluid rounded mb-4"/>
                <p>Serving customers for 200 years and counting, BMO is a highly diversified financial services provider – the 8th largest bank, by assets, in North America.</p>
              </div>
            </div>

            <div className="col-sm-8 pl-2 mb-5">
             <div className="form p-3 white">
               <h3 className="bmo-colour">Bank of Montreal</h3>
               <hr className="bmo-divider mb-4"/>

               <h5 className="bmo-text">What I did there</h5>
               <p>This will either be a paragraph or a "ul" of my job responsibilities</p>
               <br/><br/><br/><br/>

               <h5 className="bmo-text">Technologies used</h5>
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
        <h2 className="text-center">Events</h2>
        <p className="text-center mb-5">Some of the competitions and events I've been to</p>

        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-7">
              <h4>Business Development Bank of Canada Hackathon</h4>
              <h6>March 2019</h6>
              <p>Paragraph the competition, what we did, and what tech we used</p>
            </div>

            <div className="col-sm-5">
              <img src={BDChack} className="img-fluid rounded"/>
            </div>

            <div className="col-sm-12 mt-3 mb-3">
              <hr className="event-divider"/>
            </div>

            <div className="col-sm-5">
              <img src={BigData} className="img-fluid rounded"/>
            </div>


            <div className="col-sm-6">
              <h4>Big Data Challenge</h4>
              <h6>Februrary 2017</h6>
              <p>Paragraph the competition, what we did, and what tech we used</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
