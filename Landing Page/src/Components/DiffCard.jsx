import React from 'react';

const DiffCard = ({ imageSrc, title }) => {
    return (
        <div className='diff-card'>
            <div className='diff-card-bd'>
                <div className='diff-cd-out'>
                    <div className='diff-cd-in'>
                        <img src={imageSrc} alt={title} />
                    </div>
                </div>
            </div>
            <div className='cd-head'>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default DiffCard;