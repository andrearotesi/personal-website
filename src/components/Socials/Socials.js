import React from 'react';
import './Socials.scss';
import ghLogo from '../../assets/icons/github-logo.svg';
import lnLogo from '../../assets/icons/linkedin-logo.svg';

const icons = [
  {
    src: ghLogo,
    alt: 'Andrea Rotesi (andrearotesidev) on Github',
    url: 'https://github.com/andrearotesi',
  },
  {
    src: lnLogo,
    alt: 'Andrea Rotesi (Software Engineer) on Linkedin',
    url: 'https://www.linkedin.com/in/andrea-rotesi',
  }
];

const Socials = () => (
  <div className="Socials">
    {
      icons.map(icon => (
        <a href={icon.url} rel='noopener noreferrer'>
          <img src={icon.src} alt={icon.alt} />
        </a>
      ))
    }
  </div>
);

export default Socials;
