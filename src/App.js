import React from 'react';
import logo from './logo_profile.PNG';
import './App.css';
import instagram from './pngInstagram.png';
import twitter from './pngTwitter.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo ml25" alt="logo" />
        <p>
          <code>Yellow Umbrella Studios | Coming soon...</code>
        </p>  
        <header className="social-header">
          <a
              className="App-link"
              href="https://instagram.com/yellowumbrellagames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} className="social-logo" alt="logo" ></img>
            </a>
            <a
              className="App-link"
              href="https://twitter.com/yugamestudios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="social-logo ml25" alt="logo" ></img>
            </a>
        </header>
      </header>
    </div>
  );
}

export default App;
