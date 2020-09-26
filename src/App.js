import React from 'react';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather />
        <footer>
          This app was coded by Iolanda Magalhães and is {""}
          <a href="https://github.com/IolandaDM/react-final-project" target="_blank" rel="noopener noreferrer">
            open-sourced on Github
        </a>
        </footer>
      </div >
    </div >

  );
}

