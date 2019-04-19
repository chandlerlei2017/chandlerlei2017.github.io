import React, { Component } from 'react';

function About() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Student... Thinker... Developer</h1>
          <p>What I do</p>
        </div>
      </div>

      <div className="p-5 white">
        <h2>What drives me?</h2>
        <p>This will be a paragraph about me. What I'm like etc. Def larger text I reckon</p>
      </div>
      <div className="p-5 green">
        <h2> Some things I'm good at!</h2>
        <h5 className="mb-5">Everyone's good at something, these are some of the things i'm good at...</h5>
        <div className="row">
          <div className="col-sm-4">
            <h5>Languages</h5>
            <ul>
              <li>Ruby</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Frameworks</h5>
            <ul>
              <li>Rails</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Django</li>
              <li>Postgres</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5>Other Tech</h5>
            <ul>
              <li>MVC</li>
              <li>Algorithims</li>
              <li>TEMP</li>
              <li>TEMP</li>
              <li>TEMP</li>
              <li>Agile</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;