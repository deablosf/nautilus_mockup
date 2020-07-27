import React from 'react';
import './App.css';
import Splash from './components/Splash'
import Header from './components/Header'
import Landing from './components/Landing'
import Content from './components/Content'

function App() {
  return (
    <div>
      <Splash />
      <Header />
      <Landing />
      <Content />

    </div>
  );
}

export default App;
