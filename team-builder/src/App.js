import React, { useState } from 'react';
import Form from './Components/Form/Form';
import Cards from './Components/Cards/Cards';
import logo from './logo.svg';
import './App.css';

function App() {
 

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      title: member.title,
      body: member.body
    };
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addNewMember={addNewMember} />
        <Cards />
      </header>
    </div>
  );
}

export default App;
