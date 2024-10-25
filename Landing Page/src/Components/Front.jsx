import React from 'react'
import Card from './ServicesCard';
import frontlines from '../assets/front-lines.png'
import service1 from '../assets/service-1.png'
import service2 from '../assets/service-2.png'
import service3 from '../assets/service-3.png'
import service4 from '../assets/service-4.png'
import service5 from '../assets/service-5.png'
import service6 from '../assets/service-6.png'
import service7 from '../assets/service-7.png'
import service8 from '../assets/service-8.png'

function Front() {
    return (
        <>
            <div className='bg-image' style={{ backgroundImage: `url(${frontlines})` }}>
            </div>
            <section >
                <div className='front-info'>
                    <div className='fi-1'>
                        <span>TOGETHER WE</span>
                        <span>REINVENTED</span>
                    </div>
                    <div className='fi-2'>
                        <span></span>
                        <div className='info-para'>
                            <p>Together, we can reinvent your business. Reinvention is about breaking industry norms. Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself. </p>
                        </div>
                        <div className='info-tag'>
                            <p>See what we do</p>
                            <span><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>

                <div className='services'>
                    <div className='services-head'>
                        <h3>Services</h3>
                    </div>
                    <div className='services-card'>
                        <div className='card-row'>
                            <Card
                                backgroundImage={service1}
                                title="Big Data & Analytics"
                                description="We are committed to providing quality products and services that add value to your business and help run it successfully."
                            />
                            <Card
                                backgroundImage={service2}
                                title="Consultancy"
                                description="Our consulting and strategic group offers Business Transformations, IT Transformations, and HR Analytics Transformation."
                            />
                            <Card
                                backgroundImage={service3}
                                title="HR & Staffing"
                                description="Blackcoffer offers a full complement of human resource and recruitment services."
                            />
                            <Card
                                backgroundImage={service4}
                                title="Cybersecurity"
                                description="Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow."
                            />
                        </div>
                        <div className='card-row'>
                            <Card
                                backgroundImage={service5}
                                title="Consultancy"
                                description="Our consulting and strategic group offers Business Transformations, IT Transformations, and HR Analytics Transformation."
                            />
                            <Card
                                backgroundImage={service6}
                                title="Sustainability"
                                description="Sustainability spans environmental, social and governance issues. Every organization must embrace it for future competitiveness."
                            />
                            <Card
                                backgroundImage={service7}
                                title="Cloud"
                                description="Every day, cloud computing becomes more integral in driving reinvention and meeting the ever-changing needs of people worldwide."
                            />
                            <Card
                                backgroundImage={service8}
                                title="Metaverse"
                                description="The physical and virtual worlds are blending. The metaverse offers new ways to connect, create and consume."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Front