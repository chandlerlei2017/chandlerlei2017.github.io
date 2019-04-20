import React, { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div>
      <div className="hero-image hero-contact">
        <div className="hero-text">
          <h1 className="mb-5">Contact Me</h1>
          <p><FontAwesomeIcon icon="envelope" /> : chandlerlei87@gmail.com</p>
          <p><FontAwesomeIcon icon="phone" /> :  647-974-2196</p>

          <button className="btn btn-primary-white" id="click" onClick={scroll}>Or...</button>
        </div>
      </div>
      <h3 className="p-5 col-sm-10 offset-sm-1" id="scroll-to">Send me a message!</h3>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

function scroll() {
  $('html, body').animate({
      scrollTop: $("#scroll-to").offset().top
  }, 1000);
}

export default Contact;