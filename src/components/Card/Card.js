import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { title, subtitle, link, linkLabel } = props;

  return (
    <div className="Card">
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
      { link && <a href={ link }>{ linkLabel ? linkLabel : link }</a> }
    </div>
  );
}

export default Card;