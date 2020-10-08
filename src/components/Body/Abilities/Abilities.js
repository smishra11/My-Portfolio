import React, { Component } from 'react';

import './Abilities.css';

class Abilities extends Component {
  render() {
    const firstList = [
      {
        abilityName: 'React Js',
        blueStar: 4,
        normalStar: 1,
        key: 1,
      },
      {
        abilityName: 'Redux',
        blueStar: 4,
        normalStar: 1,
        key: 2,
      },
      {
        abilityName: 'Redux Thunk',
        blueStar: 3,
        normalStar: 2,
        key: 3,
      },
      {
        abilityName: 'Javascript',
        blueStar: 4,
        normalStar: 1,
        key: 4,
      },
      {
        abilityName: 'Axios',
        blueStar: 4,
        normalStar: 1,
        key: 5,
      },
      {
        abilityName: 'Ajax',
        blueStar: 4,
        normalStar: 1,
        key: 6,
      },
      {
        abilityName: 'HTML',
        blueStar: 4,
        normalStar: 1,
        key: 7,
      },
      {
        abilityName: 'CSS',
        blueStar: 4,
        normalStar: 1,
        key: 8,
      },
      {
        abilityName: 'Bootstrap',
        blueStar: 4,
        normalStar: 1,
        key: 9,
      },
      {
        abilityName: 'Git',
        blueStar: 3,
        normalStar: 2,
        key: 10,
      },
      {
        abilityName: 'Debugging',
        blueStar: 3,
        normalStar: 2,
        key: 11,
      },
      {
        abilityName: 'Team Work',
        blueStar: 4,
        normalStar: 1,
        key: 12,
      },
    ];
    return (
      <div className="abilities" id="abilities">
        <div className="comp_header">
          <p className="comp_title">Abilities</p>
          <p className="comp_description">
            “Live as if you were to die tomorrow. Learn as if you were to live
            forever.” <br /> - Mahatma Gandhi
          </p>
        </div>
        <hr />
        <div className="abilities_body">
          <p className="ability_title">Skills</p>
          <div className="row pl-4 pr-4">
            {firstList.map((list1) => {
              return (
                <div className="col-md-6 ability_items" key={list1.key}>
                  <div>{list1.abilityName}</div>
                  <div>
                    {Array(list1.blueStar)
                      .fill()
                      .map((_, i) => (
                        <span className="green_star" key={i}>
                          ★
                        </span>
                      ))}
                    {Array(list1.normalStar)
                      .fill()
                      .map((_, i) => (
                        <span className="red_star" key={i}>
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Abilities;
