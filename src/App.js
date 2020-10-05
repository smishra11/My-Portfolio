import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/Header/Sidebar';
import About from './components/Body/About/About';
import Education from './components/Body/Education/Education';
import Project from './components/Body/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Body/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <About />
        <Education />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
