import React from 'react';

const Card = ({ backgroundImage, title, description }) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='card-in'>
        <div className='card-head'>
          <h4>{title}</h4>
        </div>
        <div className='card-info'>
          <p>{description}</p>
        </div>
        <div className='card-btn'>
          <p>Expand</p>
          <i className='fa-solid fa-angle-right'></i>
        </div>
      </div>
    </div>
  );
};

export default Card;