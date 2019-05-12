import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import lendingloop from "../assets/lending-loop.png"
import bmo from "../assets/bmo.png"
import BDChack from "../assets/BDC_hack.jpg"
import BigData from "../assets/Big_data.jpg"
import LightTricks from "../assets/LightTricks.jpg"
import GmailExtension from "../assets/GmailExtension.png"
import QuizIt from "../assets/QuizIt.png"

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
        <h5 className="mb-5 color-grey text-center">These are some of the places I've worked!</h5>
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-8 pr-2 mb-5">
             <div className="form p-3 white">
               <h3 className="ll-colour">Lending Loop</h3>
               <hr className="ll-divider mb-4"/>

               <h5 className="ll-text">What I did there</h5>
               <ul>
                 <li>Solely implemented new onboarding/signup flow including all views, controllers, validations, tests, and styling</li>
                 <li>Created API endpoint to communicate with Django app and send emails to specified users</li>
                 <li>Routinely wrote tests, increasing the total test coverage by around 6%</li>
                 <li>Implemented large database migrations for database refactoring</li>
                 <li>Critically solved minor and major bug fixes affecting the core business</li>
               </ul>

               <h5 className="ll-text">Technologies used</h5>
               <ul>
                 <li>Ruby on Rails</li>
                 <li>PostgreSQL</li>
                 <li>Salesforce and Restforce API</li>
                 <li>Heroku, Docker, CircleCI</li>
                 <li>Bootstrap, JQuery, FontAwesome and other libraries</li>
               </ul>
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
               <ul>
                 <li>Increased the functionality of the DataPower system by creating Bash shell scripts for certificate uploading</li>
                 <li>Deployed project builds on Bamboo and Ansible, allowing for testing and continuous integration</li>
                 <li>Automated project builds with Ansible YAML playbooks, increasing efficieny of our build process</li>
               </ul>

               <h5 className="bmo-text">Technologies used</h5>
               <ul>
                 <li>Bash Scripts</li>
                 <li>IBM DataPower</li>
                 <li>Ansible</li>
                 <li>Bamboo</li>
               </ul>
             </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "text-center p-5 white">
        <h2>Projects</h2>
        <h5 className="mb-5 color-grey">These are my current projects. Learn more...</h5>
        <div className = "row mb-5">
          <div className="col-sm-4">
            <div className="project-card ml-3 mr-3 tinted">
              <img src={GmailExtension} className="img-fluid rounded project-image"/>
              <div className="text">
                <h3>Gmail Quick View</h3>
                <p>A chrome extension that enables quick previews of unread emails</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="project-card ml-3 mr-3 tinted">
              <img src={LightTricks} className="img-fluid rounded project-image"/>
              <div className="text">
                <h3>Light Tricks</h3>
                <p>An Omega2 powered multi-tool using LED lights</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="project-card ml-3 mr-3 tinted">
              <img src={QuizIt} className="img-fluid rounded project-image"/>
                <div className="text">
                  <h3>QuizIt</h3>
                  <p>An android quiz app with various different topics</p>
                </div>
            </div>
          </div>
        </div>
        <Link to="/projects" className="btn btn-primary-blue">Learn More</Link>
      </div>

      <div className="p-5">
        <h2 className="text-center">Events</h2>
        <h5 className="color-grey text-center mb-0">Some of the competitions and events I've been to</h5>

        <div className="col-sm-10 offset-sm-1">
          <div className="row">

            <div className="col-sm-12 mt-3 mb-3">
              <hr className="event-divider"/>
            </div>

            <div className="col-sm-7">
              <h4>Business Development Bank of Canada Hackathon</h4>
              <h6 className="text-right">Winner - March 2019</h6>
              <p>
                Our team implemented a web application with a React front-end and Flask back-end that
                tracked a user's page visits to individual car pages and using attributes from the cars
                they visited, would recommend various other cars similar to their viewing history using Scikit-learn.
              </p>
              <p className="mb-0">
                Additionally our application allowed users to access a report/overview of features they most looked for
                in a car and a list of car recommendations generted from this report. The web application was integrated with a
                mobile application that would be provided to salesmen in a dealership, that could instantly view their client's
                preferences for cars.
              </p>
            </div>

            <div className="col-sm-5">
              <img src={BDChack} className="img-fluid rounded vertical-center"/>
            </div>

            <div className="col-sm-12 mt-3 mb-3">
              <hr className="event-divider"/>
            </div>

            <div className="col-sm-5">
              <img src={BigData} className="img-fluid rounded"/>
            </div>


            <div className="col-sm-6">
              <h4>Big Data Challenge</h4>
              <h6 className="text-right">Winner - Februrary 2017</h6>
              <p>
                Our team focused on cancer reasearch when analyzing the provided data set of more than half a million JSON files pertaining to
                research papers puplished. We filtered the data in python, extracting titles, abstracts, and other important properties of the
                papers into a master csv data set.
              </p>
              <p>
                The master data set was then analyzed using R to find statistical correlations that were visually represented in the form of
                tables and graphs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
