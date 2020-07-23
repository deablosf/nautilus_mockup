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
              <p><a href="">ISSUES</a></p>
              <p><a href="">TOPICS</a></p>
              <p><a href="">BLOGS</a></p>
              <p><a href="">NEWSLETTERS</a></p>
              <p><a href=""><img src="https://img.icons8.com/material-sharp/14/000000/facebook-f.png"/></a></p>
              <p><a href=""><img src="https://img.icons8.com/android/13/000000/twitter.png"/></a></p>
              <p><a href="">LOGIN</a></p>
              <button className="subBtn">SUBSCRIBE</button> 
            </div>
              
        </div>
      </header>


    </div>
  );
}

export default App;
