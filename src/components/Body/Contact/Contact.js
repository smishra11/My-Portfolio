import React, { Component } from 'react';

import './Contact.css';
import Github from './github.svg';
import Linkedin from './linkedin.svg';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1 className="text-center">Contact</h1>
        <div className="text-center">
          <span className="mr-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/smishra11"
              alt="gitLink"
            >
              <img src={Github} alt="git icon" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/subhasish-mishra-17d97/"
              alt="linkinLink"
            >
              <img src={Linkedin} alt="linkedin icon" />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
