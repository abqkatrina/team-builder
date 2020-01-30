import React, { useState } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state= { name: "" };

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleInputSubmit = this.handleInputSubmit.bind(this);
};

  handleInputChange = e => {
    const target = e.target;
    const value = e.type === 'option' ? target.selected :
    target.value;
    const name= target.name;

    this.setMember({ name: e.target.value });
  };

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <label htmlFor="title">Team Member:</label>
        <input id="name" type="text" name="title" onChange={this.handleChange} />
       
        <label>gitHub Username:</label>
        <input></input>

        <label>Member Email:</label>
        <input></input> 

        <label>Member Role:</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="Web Dev">Web Dev</option>
          <option value="Android">Mobile Dev - Android</option>
          <option value="iOs">Mobile Dev - iOs</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX">UI/UX</option>
        </select>
        
        <button type="submit" onSubmit={this.handleInputChange.submit}>Add Member</button>
     
      </form>
    );
  }
};

export default Form;
