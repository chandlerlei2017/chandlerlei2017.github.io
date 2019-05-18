import React, { Component } from 'react';
import image from '../assets/about_me1.jpg'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <div className = "pt-5 pb-5 mt-5">
        <div className="row col-sm-10 offset-sm-1">
          <div className="col-sm-8 mt-3">
            <h2>About Me</h2>
            <hr className="event-divider mt-3 mb-3"/>
            <div className="mb-3 black-text description-text">
              <span className="blue-text">Name:</span> Chandler Lei<br/><br/>
              <span className="blue-text">University:</span> University of Waterloo<br/><br/>
              <span className="blue-text">Program:</span> 2B Computer Engineering<br/><br/>
              <span className="blue-text">Status:</span> Looking for an fall 2019 internship<br/><br/>
              <span className="blue-text">Areas of Interest:</span> Web Development, API Endpoints, <br/>
              Database Interactions, Machine Learning, Natural Language Processing
            </div>
          </div>
          <div className="col-sm-4 p-3 mt-5 pt-4">
            <img src={image} className="img-fluid rounded form transition-3d-hover"/>
          </div>
        </div>
      </div>
      <div className="grey">
        <div className="pt-5 pb-5 col-sm-10 offset-sm-1">
          <h2 className="mb-4">Who am I?</h2>
          <p className="description-text">
            Hi, I'm Chandler Lei. Yes named, but perhaps not so aptly, after the famous character from Friends.
            Born in Sweden, Raised in Canada, and of Chinese descent. I traversed the globe by the time I was in kindergarten.
            Now, I am an aspiriring developer currently studying Computer Engineering in my second year at the University of Waterloo.
            I am truly a full-stack developer and love coding everything from the most minute design tweaks to database querying and
            API requests.

            Visit the other pages of this site to learn more about the experience I have gained so far and learn more about me!
          </p>
        </div>
      </div>
      <div className="pt-5 pb-5">
        <div className="col-sm-10 offset-sm-1">
          <h2> Some things I'm good at!</h2>
          <h5 className="mb-5 color-grey">Everyone has their strengths, here are mine...</h5>
          <div className="row">
            <div className="col-sm-4">
              <h5>Languages</h5>
              <ul>
                <li>Ruby</li>
                <li>Python</li>
                <li>Java</li>
                <li>Javascript</li>
                <li>HTML/CSS</li>
                <li>C/C++</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5>Frameworks</h5>
              <ul>
                <li>Ruby on Rails</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Android</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5>Other Tech</h5>
              <ul>
                <li>Heroku</li>
                <li>CircleCi</li>
                <li>Git</li>
                <li>Bash</li>
                <li>REST API's</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
