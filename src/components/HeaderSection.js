import React from 'react';
import { Button } from './Button';
import './HeaderSection.scss';
import headerVideo from '../footage/headerSection.mp4';

function HeaderSection() {
  return (
    <div className='header-container'>
      <video src={headerVideo} muted autoPlay loop />
      <h1>FIRST REACT PROJECT</h1>
      <p>By kmjnnhyk</p>
      <div className="header-btns">
        <Button
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btn'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSection;
