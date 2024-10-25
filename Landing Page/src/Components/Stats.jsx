import React from 'react'
import stat1 from '../assets/stats1.png'
import stat2 from '../assets/stats2.png'
import stat3 from '../assets/stats3.png'
import stat4 from '../assets/stats4.png'
import stat5 from '../assets/stats5.png'
import stat6 from '../assets/stats6.png'
import ais from '../assets/ai-solution.png'
import st2 from '../assets/stats-2.png'
function Stats() {
    return (
        <>
            <div className='stats-head'>
                <h3>The reason why Blackcoffer stands out</h3>
                <h2>Blackcoffer Unfolds Solution To Everything</h2>
            </div>
            <div className='stats-box'>
                <div className='st-box'>
                    <div className='box-cl1'>
                        <div className='cl1-row'>
                            <div className='s-box'>
                                <img src={stat1} alt="There it is" />
                                <h2>12+</h2>
                                <p>Years of Experience</p>

                            </div>
                            <div className='s-box'>
                                <img src={stat2} alt="There it is" />
                                <h2>100+</h2>
                                <p>Clients</p>
                            </div>
                            <div className='l-box'>
                                <img src={stat3} alt="There it is" />
                                <h2>97%</h2>
                                <p>Client Retention Rate</p>
                            </div>
                        </div>
                        <div className='cl1-row'>
                            <div className='l-box' style={{ backgroundImage: `url(${ais})` }}>
                                <div className='black-cl2'>
                                    <h2>40+</h2>
                                    <p>AI Solutions</p>
                                </div>
                            </div>
                            <div className='s-box'>
                                <img src={stat4} alt="There it is" />
                                <h2>350+</h2>
                                <p>Employees</p>
                            </div>
                            <div className='s-box'>
                                <img src={stat5} alt="There it is" />
                                <h2>2+</h2>
                                <p>Countries</p>
                            </div>
                        </div>
                        <div className='cl1-row'>
                            <div className='l2-box'>
                                <img src={stat6} alt="There it is" />
                                <h2>80+</h2>
                                <p>Big Data Solutions</p>
                            </div>
                            <div className='l2-box'>
                                <h2 className='greyh2'>Dedicated to</h2>
                                <p>Providing Top-Notch Big Data Analytics & BI Services</p>
                            </div>
                        </div>
                    </div>
                    <div className='box-cl2' style={{ backgroundImage: `url(${st2})` }}>
                        <div className='black-cl2'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Stats