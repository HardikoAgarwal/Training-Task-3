import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} alt="" />
        </div>
        <div className='nav-options'>
            <span>Who we are <i class="fa-solid fa-angle-down"></i></span>
            <span>What we do <i class="fa-solid fa-angle-down"></i></span>
            <span>Insights <i class="fa-solid fa-angle-down"></i></span>
            <span>Careers <i class="fa-solid fa-angle-down"></i></span>
        </div>
        <div className='nav-search'>
            <div className='search'>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='cnt-btn'>
                <button><i class="fa-solid fa-phone"></i> Contact Us</button>
            </div>
        </div>
    </nav>  
  )
}

export default Navbar