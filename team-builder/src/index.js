import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Components/Cards/Cards';
import Form from './Components/Form/Form';

function App() {
  const [members, setMembers] = useState([
    {
      name: '',
      gitName: '',
      email: '',
      role: '',
    }

  ])
  const addNewMember = member => {
    const newMember = {
      name: member.name,
      gitName: member.gitName,
      email: member.email,
      role: member.role,
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Form  addNewMember={addNewMember} />
        <Cards members={members}/>
      </header>
    </div>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
