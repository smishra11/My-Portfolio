import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Header/Sidebar';
import Profile from './components/Body/Profile/Profile';
import Education from './components/Body/Education/Education';
import Project from './components/Body/Projects/Projects';
import Contact from './components/Body/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Profile />
        <Education />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
