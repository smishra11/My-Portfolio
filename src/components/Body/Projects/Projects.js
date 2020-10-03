import React, { Component } from 'react';

import './Projects.css';
import Projectcard from './Projectcard/Projectcard';
import Burgerbuilder from './burger_builder.png';

class Projects extends Component {
  render() {
    return (
      <div>
        <h3 className="project_header">Projects</h3>
        <div className="row">
          <div className="col-sm-6">
            <Projectcard photo={Burgerbuilder} title={'Burger Builer'} />
          </div>
          <div className="col-sm-6">
            <Projectcard photo={Burgerbuilder} title={'Lyrics Finder'} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Projectcard photo={Burgerbuilder} title={'Beach Resort'} />
          </div>
          <div className="col-sm-6">
            <Projectcard photo={Burgerbuilder} title={'Github Finder'} />
          </div>
        </div>

        {/* <div className="project_summary">
          <h5 className="project_name">Burger Builder</h5>
          <div className="project_desc">
            <p>
              1: It is an application where users can add all the ingredients
              they want to add in the burger from a list of options and based on
              that the price of the burger will increase or decrease. After
              adding ingredients they can check out it and if they checkout then
              they will get simply an alert for that.
            </p>
            <p>
              2: Here all new features of ES6 are used. The application is a
              single page application which works smoothly in both desktop and
              mobile view.
            </p>
            <p>
              3: It is built by using React.js, React hooks, and also uses its
              own Higher-order Component (HOC) and all styles are done by using
              CSS.
            </p>
          </div>
          <hr />
          <h5 className="project_name">Lyrics Finder</h5>
          <div className="project_desc">
            <p>
              1: It is an application where a user can get lyrics for any song.
              On search of song names, multiple options will come matching the
              texts, and on click of any particular option lands user to another
              page where they can see the lyrics of that song. And on the home
              page of the project users can see the top 10 songs available at
              the moment.
            </p>
            <p>
              2: This application is built by using Bootstrap, React.js, React
              context API, Axios, React router, moment, Musixmatch developer API
              for lyrics retrieve, Font awesome for some icons. All styles are
              done by using bootstrap.
            </p>
          </div>
          <hr />
          <h5 className="project_name">Beach Resort</h5>
          <div className="project_desc">
            <p>
              1: It is an application like a resort where user can able to find
              different rooms based on their requirement. For that users can
              filter the rooms by using different filters like price, room size,
              room capacity, room type.
            </p>
            <p>
              2: User can able to see the full preview of every individual room
              available in this app by clicking on the particular rooms shown.
            </p>
            <p>
              3: It is built by using React.js, React Router, React hooks, React
              Context API and all styles are done by using CSS. Also, Font
              Awesome is used for the icon.
            </p>
          </div>
          <hr />
          <h5 className="project_name">Github Finder</h5>
          <div className="project_desc">
            <p>
              1: It is an application, where one can easily search and find
              users from GitHub by entering their username. As a result, it
              shows their profile, total public repositories, followers,
              location, websites, joined date, company name where they are
              working as well as name of their last five repositories.
            </p>
            <p>
              2: It is built by using HTML, JavaScript, Bootstrap and GitHub
              OAuth api.
            </p>
          </div> 
        </div>*/}
      </div>
    );
  }
}

export default Projects;
