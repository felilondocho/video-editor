import React from 'react';
import VideoPlayer from './VideoPlayer';
import '../App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="appBody">
      <VideoPlayer />
    </div>
  </div>
);

export default App;
