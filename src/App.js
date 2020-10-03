import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import About from './components/Body/About/About';
import Education from './components/Body/Education/Education';
import Project from './components/Body/Projects/Projects';
import Footer from './components/Footer/Footer';

// import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Education />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
