import React, { Component } from 'react';

import './Education.css';
import Intermediate from '../../../assets/intermediate.jpg';
import BachelorDegree from '../../../assets/bachelor_degree.jpg';

class Education extends Component {
  render() {
    return (
      <div className="education card" id="education">
        <div className="comp_header">
          <p className="comp_title">Education</p>
          <p className="comp_description">
            “Life without knowledge is death in disguise.”
            <br />- Talib Kweli
          </p>
        </div>
        <hr />
        <div className="row m-3">
          <div className="col-md-6">
            <div className="card">
              <img className="card-img-top" src={Intermediate} alt="Card cap" />
              <div className="card-body">
                <p className="card-title education_title">Intermediate</p>
                <p className="card-text text-center">
                  Council of higher secondary education, Odisha
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card ml-4">
              <img
                className="card-img-top"
                src={BachelorDegree}
                alt="Card cap"
              />
              <div className="card-body">
                <p className="card-title education_title">Bachelor Degree</p>
                <p className="card-text text-center">
                  Fakir mohan university, Balasore, Odisha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
