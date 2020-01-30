import React, { useState } from "react";

const Form = props => {
  console.log("Form props", props);
  const [person, setPerson] = useState({
    name: ""
  });
  // onChange handler to control inputs
  const handleChanges = e => {
    setPerson({ title: e.target.value });
    console.log(person);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewPerson(person);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Team Member</label>
      <input id="title" type="text" name="title" onChange={handleChanges} />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default Form;
