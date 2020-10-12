import React, { Component } from 'react';

class Contactform extends Component {
  render() {
    return (
      <>
        <div className="card px-4 py-3 mx-5">
          <form onSubmit={this.sendEmail}>
            <div className="form-group">
              <label htmlFor="email1">
                Email
                <span style={{ color: 'red', fontSize: '13px' }}> *</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputTextarea">
                Message
                <span style={{ color: 'red', fontSize: '13px' }}> *</span>
              </label>
              <textarea
                type="text"
                className="form-control"
                id="inputTextarea"
                placeholder="Write your message here"
                name="message"
                rows="4"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <hr />
      </>
    );
  }
}

export default Contactform;
