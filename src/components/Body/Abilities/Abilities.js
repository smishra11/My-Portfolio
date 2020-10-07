import React, { Component } from 'react';

import './Abilities.css';

class Abilities extends Component {
  render() {
    const firstList = [
      {
        abilityName: 'React Js',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'Redux',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'Redux Thunk',
        blueStar: 3,
        normalStar: 2,
      },
      {
        abilityName: 'Javascript',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'Axios',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'Ajax',
        blueStar: 4,
        normalStar: 1,
      },
    ];
    const secondList = [
      {
        abilityName: 'HTML',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'CSS',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'Bootstrap',
        blueStar: 4,
        normalStar: 1,
      },
      {
        abilityName: 'Git',
        blueStar: 3,
        normalStar: 2,
      },
      {
        abilityName: 'Debugging',
        blueStar: 3,
        normalStar: 2,
      },
      {
        abilityName: 'Team Work',
        blueStar: 4,
        normalStar: 1,
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
          <div className="row">
            <div className="col-md-6 p-0">
              <ul className="no-bullets">
                {firstList.map((list1) => {
                  return (
                    <li className="list_items">
                      {list1.abilityName}
                      {Array(list1.blueStar)
                        .fill()
                        .map((_) => (
                          <span className="blue_star">★</span>
                        ))}
                      {Array(list1.normalStar)
                        .fill()
                        .map((_) => (
                          <span className="grey_star">★</span>
                        ))}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="no-bullets">
                {secondList.map((list2) => {
                  return (
                    <li className="list_items ml-2">
                      {list2.abilityName}
                      {Array(list2.blueStar)
                        .fill()
                        .map((_) => (
                          <span className="blue_star">★</span>
                        ))}
                      {Array(list2.normalStar)
                        .fill()
                        .map((_) => (
                          <span className="grey_star">★</span>
                        ))}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Abilities;
