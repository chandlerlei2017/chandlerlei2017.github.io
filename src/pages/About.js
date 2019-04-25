import React, { Component } from 'react';
import image from '../assets/temp_about.jpg'

function About() {
  return (
    <div>
      <div className = "pt-5 pb-5 mt-5 white">
        <div className="row col-sm-10 offset-sm-1">
          <div className="col-sm-8 mt-3">
            <h2>About Me</h2>
            <h5 className="mb-3">Name: Chandler Lei</h5>
            <h5 className="mb-3">University: University of Waterloo</h5>
            <h5 className="mb-3">Program: Computer Engineering</h5>
            <h5 className="mb-3">Year: 2B</h5>
            <p>Interesting facts:?</p>
          </div>
          <div className="col-sm-4 p-3">
            <img src={image} className="img-fluid rounded"/>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-5 col-sm-10 offset-sm-1">
        <h2>Who am I?</h2>
        <p>
          This will be a paragraph about me. What I'm like etc...
        </p>
      </div>
      <div className="pt-5 pb-5 white">
        <div className="col-sm-10 offset-sm-1">
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

    </div>
  );
}

export default About;
