import React, { Component } from 'react';
import image from '../assets/temp_about.jpg'

function About() {
  return (
    <div>
      <div className = "p-5 mt-5 white">
        <div className="row">
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

      <div className="p-5">
        <h2>Who am I?</h2>
        <p>
          Hi, I'm Chandler Lei. Yes named, but perhaps not so aptly, after the famous character from Friends.
          Born in Sweden, Raised in Canada, and of Chinese descent. I traversed the globe by the time I was in kindergarten.
          Now, I am an aspiriring developer currently studying Computer Engineering in my second year at the University of Waterloo.
          I am truly a full-stack developer and love coding everything from the most minute design tweaks to database querying and
          API requests.

          Visit the other pages of this site to learn more about the experience I have gained so far and learn more about me!
        </p>
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
