import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="card-item">
        <Link className='card-item-link' to={props.path}>
          <figure className='card-item-wrap' data-category={props.label}>
            <img
              src={props.src}
              alt="Card Image"
              className="card-item-img"
            />
            <div className="card-item-info">
              <h5 className="card-item-text">{props.text}</h5>
            </div>
          </figure>
        </Link>
      </li>
    </>
  )
}

export default CardItem
