import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.scss';

function Home() {
  return (
    <div>
      <div className="hero-image hero-home">
        <div className="hero-text">
          <h1>Chandler Lei</h1>
          <p>Pushing the limits</p>
          <Link to="/about" className="btn btn-primary-white">About Me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
