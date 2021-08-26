import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    showButton();
    showMenuToggle();
  }, []);

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
            <li className='nav-item' onClick={closeMobileNav}>
              <Link to='/' className='nav-link' >
                HOME
              </Link>
            </li>
            <li className='nav-item' onClick={closeMobileNav}>
              <Link to='/services' className='nav-link' >
                SERVICES
              </Link>
            </li>
            <li className='nav-item' onClick={closeMobileNav}>
              <Link to='/products' className='nav-link' >
                PRODUCTS
              </Link>
            </li>
            {!button &&
              <li className='nav-item' onClick={closeMobileNav}>
                <Link to='/sign-up' className='nav-link-mobile' >
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
