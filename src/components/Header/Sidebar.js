import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
  state = {
    isactive: false,
    activekey: null,
  };

  activeHandler = (key) => {
    return this.setState({ isactive: true, activekey: key });
  };

  render() {
    const linkData = [
      {
        linkName: 'About',
        pageLink: '#about',
        key: 1,
      },
      {
        linkName: 'Education',
        pageLink: '#education',
        key: 2,
      },
      {
        linkName: 'Projects',
        pageLink: '#projects',
        key: 3,
      },
      {
        linkName: 'Contact',
        pageLink: '#contact',
        key: 4,
      },
    ];
    return (
      <div className="sidebar">
        <ul className="nav flex-column sidebar_items">
          {linkData.map((data) => {
            return (
              <li
                className={
                  this.state.activekey === data.key
                    ? 'nav-item activeted'
                    : 'nav-item'
                }
                key={data.key}
                onClick={() => this.activeHandler(data.key)}
              >
                <a className="nav-link" href={data.pageLink}>
                  {data.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
