import React, { Component } from 'react';

import './Education.css';

class Education extends Component {
  render() {
    return (
      <div className="education">
        <p className="education_header">Education</p>
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
