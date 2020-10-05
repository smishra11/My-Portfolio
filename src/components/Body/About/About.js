import React, { Component } from 'react';

import './About.css';
import Photo from './myphoto.jpg';

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div>
          <img className="about_image" src={Photo} alt="My_photo" />
          <p className="about_name def">Subhasish Mishra</p>
          <p className="about_deg def">(Frontend Developer)</p>
        </div>
        <div className="about_pp">
          <p className="about_header">About</p>
          <p className="about_title">A creative React webdeveloper</p>
          <hr />
          <p className="about_desc">
            Passionate and committed professional seeking an entry level
            opportunity with an organization where I can utilize my skills and
            enhance learning in the field of work for better output through a
            disciplined, organized and progressive ways with my sincerity and
            hard work in the task entrusted to me.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
