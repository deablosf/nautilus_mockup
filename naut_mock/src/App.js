import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav">
          <div className="logo"> <img className="logoI" src={require("./assets/nautilus-logo-sprite@2x.png")}/> </div>
            <div className="links">
              <p>ISSUES</p>
              <p>TOPICS</p>
              <p>BLOGS</p>
              <p>NEWSLETTERS</p>
              <p>Facebook</p>
              <p>twitter</p>
              <p>Login</p>
              <button>SUBSCRIBE</button> 
            </div>
              
        </div>
      </header>


    </div>
  );
}

export default App;
