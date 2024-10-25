import React from 'react';
import DiffCard from './DiffCard';
import cons from '../assets/const.png'
import impr from '../assets/impro.png'
import branch from '../assets/branch.png'
import exper from '../assets/expert.png'
import secu from '../assets/secur.png'
import trans from '../assets/transp.png'
function Different() {
    return (
        <>
            <div className='diff-head'>
                <h2>What Makes Us Different</h2>
            </div>
            <div className='diff-card-row'>
                <DiffCard imageSrc={cons} title="Consistency" />
                <DiffCard imageSrc={impr} title="Improvement" />
                <DiffCard imageSrc={branch} title="Branching" />
                <DiffCard imageSrc={exper} title="Expertise" />
                <DiffCard imageSrc={secu} title="Security" />
                <DiffCard imageSrc={trans} title="Transparency" />
            </div>
        </>
    );
}
export default Different