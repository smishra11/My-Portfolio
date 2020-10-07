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
        linkName: 'Abilities',
        pageLink: '#abilities',
        key: 3,
      },
      {
        linkName: 'Projects',
        pageLink: '#projects',
        key: 4,
      },
      {
        linkName: 'Contact',
        pageLink: '#contact',
        key: 5,
      },
    ];
    return (
      <div className="sidebar">
        <ul className="nav flex-column sidebar_items">
          {linkData.map((data) => {
            return (
              <li className="nav-item" key={data.key}>
                <a
                  className={
                    this.state.activekey === data.key
                      ? 'nav-link activated'
                      : 'nav-link'
                  }
                  href={data.pageLink}
                  onClick={() => this.activeHandler(data.key)}
                >
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
