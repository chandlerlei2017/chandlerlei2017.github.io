import React, { Component } from 'react';
import image from '../assets/temp_about.jpg'

function About() {
  return (
    <div>
      <div className = "pt-5 pb-5 mt-5 white">
        <div className="row col-sm-10 offset-sm-1">
          <div className="col-sm-8 mt-3">
            <h2>About Me</h2>
            <hr className="event-divider mt-3 mb-3"/>
            <p className="mb-3 black-text">
              Chandler Lei<br/>
              University of Waterloo<br/>
              2B Computer Engineering<br/>
              Interesting facts?<br/>
            </p>
          </div>
          <div className="col-sm-4 p-3">
            <img src={image} className="img-fluid rounded"/>
          </div>
        </div>
      </div>

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
      <div className="pt-5 pb-5 white">
        <div className="col-sm-10 offset-sm-1">
          <h2> Some things I'm good at!</h2>
          <h5 className="mb-5 color-grey">Everyone has their strengths, here are mine...</h5>
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
