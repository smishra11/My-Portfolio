import React, { Component } from 'react';

import './Header.css';
// import About from '../Body/About/About';
// import Education from '../Body/Education/Education';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav_header">
          <a className="navbar-brand nav_name" href="#">
            icon with some text
          </a>
          <button
            className="navbar-toggler nav_toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* change the href adress */}
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* change the href adress */}
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
