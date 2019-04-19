import React, { Component } from 'react';
import './Home.css'

function Home() {
  return (
    <div>
      <div className = "hero-image">
        <div className = "hero-text">
          <h1>Chandler Lei</h1>
          <p>Pushing the Limits</p>
        </div>
      </div>
      <div className = "text-center mt-5 mb-5">
        <h2>About Me</h2>
      </div>
      <div className = "text-center mt-5 mb-5">
        <h2>Projects</h2>
      </div>
    </div>
  );
}

export default Home;