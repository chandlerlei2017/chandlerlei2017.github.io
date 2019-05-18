import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer className="text-right pr-4 pt-2 pb-2 footer">
        <a className="pr-2 footer-icon" href="https://github.com/chandlerlei2017" target="_blank"> <FontAwesomeIcon icon={['fab', 'github']} size='lg'/> </a>
        <a className="pl-2 pr-2 footer-icon" href="https://www.linkedin.com/in/qian-chandler-l-486069137/" target="_blank"> <FontAwesomeIcon icon={['fab', 'linkedin']} size='lg'/> </a>
        <a className="pl-2 footer-icon" href="mailto:q4lei@uwaterloo.ca"> <FontAwesomeIcon icon="envelope" size='lg'/> </a>
      </footer>
    );
  }
}

export default Footer;