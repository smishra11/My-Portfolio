import React, { Component } from 'react';

import './Profile.css';
import Photo from './logo.png';

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="comp_header">
          <p className="comp_title">Profile</p>
          <p className="comp_description">A creative React webdeveloper</p>
        </div>
        <hr />
        <div className="about_body">
          <div className="about_body_container">
            <p className="about_body_title">About me</p>
            <p className="about_body_description">
              Passionate and committed professional seeking an entry level
              opportunity with an organization where I can utilize my skills and
              enhance learning in the field of work for better output through a
              disciplined, organized and progressive ways with my sincerity and
              hard work in the task entrusted to me.
            </p>
          </div>
          <div className="about_photo_container">
            <img className="about_photo" src={Photo} alt="My_photo" />
            <p className="m-0">Subhasish Mishra</p>
            <p>(Frontend Developer)</p>
          </div>
          <div>
            <p className="about_body_title">Details</p>
            <div>
              <p>
                <span className="details_title">Name : </span>
                <br /> Subhasish Mishra
              </p>
              <p>
                <span className="details_title">Age : </span>
                <br /> 23
              </p>
              <p>
                <span className="details_title">Location : </span>
                <br /> Balasore, Odisha, India
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
