import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './scss/Navbar.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false); // below 960px -> toggle == true
  const [mobile, setMobile] = useState(false); // toggle mobile menu

  const handleToggle = () => {
    if (window.innerWidth <= 960) {
      setToggle(true);

    }
    else {
      setToggle(false);
    }

  };
  const handleMobile = () => { setMobile(prev => !prev) };
  const closeMobile = () => {
    setMobile(false);
  };

  useEffect(() => {
    handleToggle();
  });

  window.addEventListener('resize', handleToggle);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className="logo">
          <Link to='/Home' className='logo-link' onClick={closeMobile}>
            <h1 className='logo-text'>KMJNHK</h1>
          </Link>
        </div>

        <ul className={mobile ? 'menu-list mobile' : 'menu-list'}>
          <li className="menu">
            <Link to='/Works' className='menu-link' onClick={closeMobile}>
              WORKS
            </Link>
          </li>
          <li className="menu">
            <Link to='/About' className='menu-link' onClick={closeMobile}>
              ABOUT
            </Link></li>
          <li className="menu">
            <Link to='/Contacts' className='menu-link' onClick={closeMobile}>
              CONTACTS
            </Link></li>
        </ul>
        {toggle &&
          <div className="menu-toggle" onClick={handleMobile}>
            <i className="fas fa-bars"></i>
          </div>}

      </div>
    </div>
  );
}

export default Navbar;
