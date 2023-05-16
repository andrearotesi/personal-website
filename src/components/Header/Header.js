import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <Link to='/'><h3>Andrea Rotesi</h3></Link>
    
    <nav className='main-nav'>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/resume'>Résumé</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  </div>
);

export default Header;
