import React from 'react';
import './App.css';
import TestReact from './TestReact';
import BackgroundWrapper from './BackgroundWrapper'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestReact></TestReact>

          <BackgroundWrapper backgroundColor={"blue"}></BackgroundWrapper>
      </header>
    </div>
  );
}

export default App;
