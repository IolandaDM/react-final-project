import React from 'react';
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer className="github-reference">
          This app was coded by Iolanda Magalhães and is {""}
          <a href="https://github.com/IolandaDM/react-final-project" target="_blank" rel="noopener noreferrer" className="github-link">
            open-sourced on Github
        </a>
        </footer>
      </div >
    </div >

  );
}

