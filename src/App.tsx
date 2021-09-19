import './App.css';

import React from 'react';

import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="App-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
