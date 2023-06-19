import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { date, title, subtitle, link, linkLabel } = props;

  return (
    <div className="Card">
      <p>{ date }</p>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
      { link && <a className='link' href={ link }>{ linkLabel ? linkLabel : link }</a> }
    </div>
  );
}

export default Card;