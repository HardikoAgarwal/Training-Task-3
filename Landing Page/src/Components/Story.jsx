import React from 'react';

const Story = ({ date, description }) => {
  return (
    <div className='story'>
      <h4>{date}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Story;