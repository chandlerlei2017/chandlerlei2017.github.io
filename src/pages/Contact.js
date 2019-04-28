import React, { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../components/ContactForm'

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
      <div className="mt-5 mb-5 col-sm-8 offset-sm-2">
        <h3 id="scroll-to">Send me a message!</h3>
        <h5 className="mb-5 color-grey">I'll try to get back to you as soon as possible</h5>
        <ContactForm/>
      </div>
    </div>
  );
}

function scroll() {
  $('html, body').animate({
      scrollTop: $("#scroll-to").offset().top
  }, 1000);
}

export default Contact;