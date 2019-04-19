import React, { Component } from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Chandler Lei</h1>
          <p>Pushing the Limits</p>
        </div>
      </div>
      <div className = "text-center pt-5 pb-5 white">
        <p>"It does not matter how slowly you go as long as you do not stop." Me: 2018</p>
      </div>
      <div className = "text-center pt-5 pb-5 white">
        <h2>About Me</h2>
        <p>Who am I? What Do I like to do? Learn More...</p><br/><br/><br/><br/>
      </div>
      <div className = "text-center pt-5 pb-5">
        <h2>Projects</h2>
        <p>These are my current projects. Learn more...</p><br/><br/><br/><br/>
      </div>
      <div className = "text-center pt-5 pb-5 white">
        <h2>Work Experience</h2>
        <p>My work expreience. Learn more...</p><br/><br/><br/><br/>
      </div>
      <div className = "text-center pt-5 pb-5">
        <h2>Contact Me</h2>
        <p>Questions? or just want to chat? Contact me...</p><br/><br/><br/><br/>
      </div>
    </div>
  );
}

export default Home;
