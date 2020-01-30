import React, { useState } from 'react';
import Form from './Components/Form/Form';
import Cards from './Components/Cards/Cards';
import logo from './logo.svg';
import './App.css';

function App() {
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <Cards person={person} />
      </header>
    </div>
  );
}

export default App;
