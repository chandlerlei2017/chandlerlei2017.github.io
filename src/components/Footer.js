import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer className="text-right pr-4 pt-1 pb-1 footer">
        <span className="pr-1"> <FontAwesomeIcon icon={['fab', 'github']} /> </span>
        <span className="pl-1 pr-1"> <FontAwesomeIcon icon={['fab', 'linkedin']} /> </span>
        <span className="pl-1"> <FontAwesomeIcon icon="envelope"/> </span>
      </footer>
    );
  }
}

export default Footer;