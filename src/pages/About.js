import React, { Component } from 'react';
import image from '../assets/temp_about.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Student... Thinker... Developer...</h1>
          <p>This is me</p>
        </div>
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
            <p>Visit my about page to learn more about my interests and passions. </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h2>Who am I?</h2>
        <p>This will be a paragraph about me. What I'm like etc. Def larger text I reckon</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <div className="p-5 white">
        <h2> Some things I'm good at!</h2>
        <h5 className="mb-5">Everyone has their strengths, here are mine...</h5>
        <div className="row">
          <div className="col-sm-4">
            <h5>Languages</h5>
            <ul>
              <li>Ruby</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C/C++</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Frameworks</h5>
            <ul>
              <li>Rails</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Django</li>
              <li>Android</li>
              <li>Docker</li>
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
  );
}

export default About;
