import React, { Component } from 'react';

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

      <div className="p-5">
        <h2 className="mb-5">Projects</h2>

        <div className="mb-5">
          <h5>This Website!</h5>
          <h6>Yes I am including this website as a presonal project</h6>
        </div>

        <div className="mb-5">
          <h5>Gmail Chrome Extension</h5>
          <h6>Chrome extension providing the functionality of Gmail</h6>
        </div>

        <div className="mb-5">
          <h5>Quizit</h5>
          <h6>Android Quiz App</h6>
        </div>

        <div className="mb-5">
          <h5>Light Tricks</h5>
          <h6>Onion Omega2 LED multi-tool</h6>
        </div>
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
