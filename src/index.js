import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './custom.scss';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

$(document).ready(function(){
  $(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.hero-image').css('top',-(scrolled*0.0115)+'rem');
    $('.hero-image > .hero-text').css('top',(60 + scrolled*.05) + '%');
    $('.hero-image > .hero-text').css('opacity',1-(scrolled*.003));
  };
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
