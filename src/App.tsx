import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav';
import Posts from './components/posts';
import Projects from './components/projects';
import Publications from './components/publications';
import Appearances from './components/appearances';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <div className="App-content">
          <Routes>
            <Route element={<Posts />} path="/posts" />
            <Route element={<Appearances />} path="/appearances" />
            <Route element={<Publications />} path="/publications" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Home />} path="/" />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
