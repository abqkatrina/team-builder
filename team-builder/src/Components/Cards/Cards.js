import React from "react";

const Cards = props => {
  console.log("props in Cards", props)
  return (
    <div className="card-list">
      {props.members.map(member => (
        console.log("member in card-list", member),
        <div className='card' key={props.members.name}>
          <h3>{member.name}</h3>
          <p>{member.gitName}</p>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;