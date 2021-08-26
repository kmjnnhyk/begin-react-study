import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Pic</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src='/images/cardimage1.jpg'
              text='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/cardimage2.jpg'
              text='If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
              label='Music'
              path='/services'
            />
            <CardItem
              src='/images/cardimage3.jpg'
              text='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
              label='Trip'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
