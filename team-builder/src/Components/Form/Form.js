import React, { useState } from "react";

const Form = props => {
  console.log("props in Form", props);
  const [member, setMember] = useState([]);

  const handleChanges = e => {
    console.log(member)
    const target = e.target;
    const value = e.type === 'option' ? target.selected : target.value;
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember([{name: member.name, gitName: member.gitName, email: member.email, role: member.role}])
  }

    return (

      <form onSubmit={submitForm}>

        <label htmlFor="name">Team Member:</label>
        <input id="name" type="text" name="name" onChange={handleChanges} value={member.name}/>
        <br/>
        <label>gitHub Username:</label>
        <input id="gitName" type="text" name="gitName" onChange={handleChanges} value={member.gitName}/>
        <br/>
        <label>Member Email:</label>
        <input id="email" type="text" name="email" onChange={handleChanges} value={member.email}/>
        <br/>
        <label>Member Role:</label>
        <select value={member.value} onChange={handleChanges}>
          <option value="Web Dev">Web Dev</option>
          <option value="Android">Mobile Dev - Android</option>
          <option value="iOs">Mobile Dev - iOs</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX">UI/UX</option>
        </select>
        
        <button type="submit" onSubmit={submitForm}>Add Member</button>
     
      </form>
    );
}


export default Form;
