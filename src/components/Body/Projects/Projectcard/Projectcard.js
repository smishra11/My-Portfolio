import React from 'react';

import './Projectcard.css';

const Projectcard = (props) => {
  return (
    <div className="card projectcard">
      <img className="card-img-top" src={props.projectImage} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {/* take to middle of card image */}
        <div className="card-text card_link">
          <p>
            Git Hub :
            <a target="_blank" rel="noopener noreferrer" href={props.gitLink}>
              {props.gitLink}
            </a>
          </p>
          <p>
            Deployed In :
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.deployLink}
            >
              {props.deployLink}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
