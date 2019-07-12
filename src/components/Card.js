import React from 'react';
import './card.css'

const Card = (props) => {
  const {id, name, email} = props.bot;//destructuring
  return(
    <div className = "card">
      <img src = {`https://robohash.org/${id}?size=200x200`} alt = 'Robot Pic'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
