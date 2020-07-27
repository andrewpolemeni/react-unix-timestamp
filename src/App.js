import React, { Component } from 'react';
import './App.css';
import Epoch from './components/Epoch.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Epoch />
        </header>
      </div>
    );
  }
}

export default App;
