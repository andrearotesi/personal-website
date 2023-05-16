import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { title, subtitle } = props;

  return (
    <div className="Card">
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
    </div>
  );
}

export default Card;