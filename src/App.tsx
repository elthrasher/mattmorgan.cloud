import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav';
import Posts from './components/posts';
import Projects from './components/projects';
import Publications from './components/publications';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <div className="App-content">
          <Switch>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
