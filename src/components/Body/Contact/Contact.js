import React, { Component } from 'react';

import './Contact.css';
import Github from './github.svg';
import Linkedin from './linkedin.svg';

class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="comp_header">
          <p className="comp_title">Contact</p>
          <p className="comp_description">
            “If I had asked people what they wanted, they would have said faster
            horses. ”
            <br /> - Henry Ford
          </p>
        </div>
        <hr />
        <div className="all_icons">
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
        <div className="contact_details">
          <p className="mr-4">Phone - 7008857364</p>
          <p>Email - subhasish.mishra17@gmail.com</p>
        </div>
        <div className="comp_footer">
          Built by <span className="footer_name">Subhasish</span> ©{' '}
          {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}

export default Contact;
