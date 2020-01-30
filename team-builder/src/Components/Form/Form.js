import React, { useState } from "react";

const Form = props => {
  //console.log("props in Form", props);
  const [member, setMember] = useState([]);

  const handleChanges = e => {
    const value = e.type === 'option' ? e.target.selected : e.target.value;
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

  console.log("props after form", member)
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  // const handleSearch = event => {
  //    setSearchTerm(event.target.value);
  //  };
  // React.useEffect(() => {
  //   console.log("effects in form search", member)
  //    const results = member.filter(member =>
  //      member.toLowerCase().includes(searchTerm)
  //    );
  //    setSearchResults(results);
  //  }, [searchTerm]);

    return (
<div>
      <form onSubmit={submitForm}>
        <legend>Add A New Member</legend>
        <label htmlFor="name">Team Member:</label>
        <input id="name" type="text" name="name" onChange={handleChanges} value={member.name} required />
        <br/>
        <label>gitHub Username:</label>
        <input id="gitName" type="text" name="gitName" onChange={handleChanges} value={member.gitName} required />
        <br/>
        <label>Member Email:</label>
        <input id="email" type="text" name="email" onChange={handleChanges} value={member.email} required />
        <br/>
        <label>Member Role:</label>
        <select id="role" name="role"  onChange={handleChanges} value={member.role} size="2" multiple >
          <option value="Web Dev">Web Dev</option>
          <option value="Android">Mobile Dev - Android</option>
          <option value="iOs">Mobile Dev - iOs</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX">UI/UX</option>
        </select>
        <br/>
        <button type="submit" onSubmit={submitForm}>Add Member</button>
        </form>
        {/* <br/>
        <label>Search:</label>  
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
     
      
        <br/>
      <div>
        <ul>
          {searchResults.map(member => (
            <li key={member.name}>{member.name}</li>
          ))}
        </ul>
      </div> */}
     </div>
    );
}


export default Form;
