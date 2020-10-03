import React from 'react';

// import Burgerbuilder from '../burger_builder.png';

const Projectcard = (props) => {
  return (
    <div className="projectcard">
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img-top" src={props.photo} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
