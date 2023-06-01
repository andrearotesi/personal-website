import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import MobileHeader from './Mobile/MobileHeader';
import DesktopHeader from './Desktop/DesktopHeader';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 650);

    // Add event listener to handle window resize
    window.addEventListener('resize', checkIsMobile);

    // Initial check
    checkIsMobile();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="Header">
      <Link to='/'><h3>⭐️ Andrea Rotesi</h3></Link>
      { isMobile ? <MobileHeader/> : <DesktopHeader/> }
    </div>
  );
}

export default Header;
