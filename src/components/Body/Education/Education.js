import React, { Component } from 'react';

import './Education.css';

class Education extends Component {
  render() {
    return (
      <div className="education" id="education">
        <div className="comp_header">
          <p className="comp_title">Education</p>
          <p className="comp_description">
            “Life without knowledge is death in disguise.”
            <br />- Talib Kweli
          </p>
        </div>
        <hr />
        <div className="text-center">
          <p>
            <span className="education_1">Intermediate: </span>
            Fakir mohan university, Balasore, Odisha
          </p>
          <p>
            <span className="education_1">Bachelor Degree: </span> Council of
            Higner secondary education, Odisha
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
