import React from "react";

const Cards = props => {
  return (
    <div className="card-list">
      {props.cards.map(entry => (
        <div className="entry" key={entry.id}>
          <h2>{entry.title}</h2>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;