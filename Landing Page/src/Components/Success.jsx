import React from 'react';
import Story from './Story';
function Success() {
    return (
        <>
            <div className='stor-head'>
                <div className='head-1'>
                    <h3>Sucess Stories</h3>
                </div>
                <div className='head-2'>
                    <p>Read All Stories</p>
                    <span><i class="fa-solid fa-angle-right"></i></span>
                </div>
            </div>
            <div className='stories'>


                <div className='stories-row'>
                    <Story
                        date="2024 March 17"
                        description="Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development"
                    />
                    <Story
                        date="2024 March 17"
                        description="Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application"
                    />
                    <Story
                        date="March 16, 2024"
                        description="Streamlined Equity Waterfall Calculation and Deal Management System"
                    />
                    <Story
                        date="March 16, 2024"
                        description="Automated Orthopedic Case Report Generation: Harnessing Web Scraping and AI Integration"
                    />
                    <Story
                        date="February 28, 2024"
                        description="MVP for a software that analyses content from audio (Pharma-based)"
                    />
                    <Story
                        date="February 28, 2024"
                        description="Text Summarizing Tool to scrape and summarize pubmed medical papers"
                    />
                    <Story
                        date="March 17, 2024"
                        description="Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development"
                    />
                    <Story
                        date="March 17, 2024"
                        description="Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application"
                    />
                    <Story
                        date="March 16, 2024"
                        description="Streamlined Equity Waterfall Calculation and Deal Management System"
                    />
                    <Story
                        date="March 16, 2024"
                        description="Automated Orthopedic Case Report Generation: Harnessing Web Scraping and AI Integration"
                    />
                    <Story
                        date="February 28, 2024"
                        description="MVP for a software that analyses content from audio (Pharma-based)"
                    />
                    <Story
                        date="February 28, 2024"
                        description="Text Summarizing Tool to scrape and summarize pubmed medical papers"
                    />
                </div>
            </div>
            <div className='story-btn'>
                <span><i class="fa-solid fa-chevron-left"></i></span>
                <span><i class="fa-solid fa-chevron-right"></i></span>
            </div>
        </>
    );
}
export default Success