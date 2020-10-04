import React, { Component } from 'react';

import './Projects.css';
import Projectcard from './Projectcard/Projectcard';

import GithubFinder from './github_finder.png';
import Lyricsfinder from './lyrics_finder.png';
import Amazonclone from './amazon_clone.png';
import Burgerbuilder from './burger_builder.png';
import Beachresort from './beach_resort.png';
import Trackcalorie from './track_calorie.png';

class Projects extends Component {
  render() {
    const allData = [
      {
        title: 'Github Finder',
        projectImage: GithubFinder,
        gitLink: 'https://github.com/smishra11/GitHub-Finder',
        deployLink: 'https://github-finder-2019.netlify.app',
      },
      {
        title: 'Lyrics Finder',
        projectImage: Lyricsfinder,
        gitLink: 'https://github.com/smishra11/React-Lyric-Finder',
        deployLink: 'https://react-lyricsfinder.netlify.app',
      },
      {
        title: 'Amazon Clone',
        projectImage: Amazonclone,
        gitLink: 'https://github.com/smishra11/React-AMAZON-Clone',
        deployLink: 'https://clone-amazon-app.netlify.app',
      },
      {
        title: 'Burger Builder',
        projectImage: Burgerbuilder,
        gitLink: 'https://github.com/smishra11/React-Burger-Builder',
        deployLink: 'https://mybuilder-app.netlify.app',
      },
      {
        title: 'Beach Resort',
        projectImage: Beachresort,
        gitLink: 'https://github.com/smishra11/React-Beach-Resort',
        deployLink: 'https://the-react-beach-resort.netlify.app',
      },
      {
        title: 'Track Calories',
        projectImage: Trackcalorie,
        gitLink: 'https://github.com/smishra11/Track-Calorie',
        deployLink: 'https://track-your-calorie.netlify.app',
      },
    ];

    return (
      <div className="pjt_container">
        <h3 className="project_header">Projects</h3>
        <div className="row mb-4">
          {allData.map((data, index) => {
            return (
              <div className="col-sm-4 mb-4">
                <Projectcard
                  key={index}
                  title={data.title}
                  projectImage={data.projectImage}
                  gitLink={data.gitLink}
                  deployLink={data.deployLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
