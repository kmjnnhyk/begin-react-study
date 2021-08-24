import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileNav = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) { setButton(false); }
    else { setButton(true); }
  };
  const showMenuToggle = () => {
    if (window.innerWidth <= 960) { setMenuToggle(true); }
    else { setMenuToggle(false); }
  }

  window.addEventListener('resize', showButton);
  window.addEventListener('resize', showMenuToggle);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            LOGO<i className='far fa-image' />
          </Link>
          {menuToggle &&
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ?
                'fas fa-times' : 'fas fa-bars'
              } />
            </div>}
          <ul className={click && menuToggle ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileNav}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-link' onClick={closeMobileNav}>
                SERVICES
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-link' onClick={closeMobileNav}>
                PRODUCTS
              </Link>
            </li>
            {!button &&
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileNav}>
                  SIGNUP
                </Link>
              </li>}
          </ul>
          {button &&
            <Button buttonStyle='btn--outline'>SIGN-UP</Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
