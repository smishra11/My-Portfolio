import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Built by Subhasish © {new Date().getFullYear()}
      </div>
    );
  }
}

export default Footer;
