import React, { Component } from 'react';

import './Contact.css';
import Github from './github.svg';
import Linkedin from './linkedin.svg';
import Gmail from './gmail_icon.svg';
import Contactfrom from './Contactform/Contactform';

import emailjs from 'emailjs-com';

class Contact extends Component {
  state = {
    isClicked: false,
  };

  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_23b79el',
        e.target,
        'user_VtJbrHv2zwrz32QzRI7hW'
      )
      .then(
        (response) => {
          console.log(response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  emailClicked = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <div className="contact card" id="contact">
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
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/smishra11"
              alt="gitLink"
            >
              <img src={Github} alt="git icon" />
            </a>
          </span>
          <span className="pl-3 pr-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/subhasish-mishra-17d97/"
              alt="linkinLink"
            >
              <img src={Linkedin} alt="linkedin icon" />
            </a>
          </span>
          <span onClick={this.emailClicked}>
            <img className="gmailicon" src={Gmail} alt="gmail icon" />
          </span>
        </div>
        <hr />
        {this.state.isClicked ? (
          <Contactfrom
            sendEmail={this.sendEmail}
            formClosed={this.emailClicked}
          />
        ) : null}
        <div className="comp_footer">
          Built by <span className="footer_name">Subhasish</span> ©{' '}
          {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}

export default Contact;
