import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Navbar.scss';

function Navbar() {

  function toggleLogoAnimation() {
    const logo = document.querySelector('.logo-text');
    logo.classList.toggle('logo-animation', window.innerWidth < 960);
  }

  window.addEventListener('resize', toggleLogoAnimation);

  return (
    <>
      <div className='navbar-container'>
        <div className="logo">
          <Link to='/Home' className='menu-link'>
            <h1 className='logo-text'>KMJNHK</h1>
          </Link>
        </div>
        <ul className="menu-list">
          <li className="menu">
            <Link to='/Works' className='menu-link'>
              WORKS
            </Link>
          </li>
          <li className="menu">
            <Link to='/About' className='menu-link'>
              ABOUT
            </Link></li>
          <li className="menu">
            <Link to='/Contacts' className='menu-link'>
              CONTACTS
            </Link></li>
        </ul>
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <section>d</section>
      <section>d</section>
    </>
  );
}

export default Navbar;
