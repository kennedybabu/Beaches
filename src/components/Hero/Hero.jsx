import React from 'react'
import './Hero.css';
import Video from '../../assets/beach.mp4'
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
  return (
    <div className='hero'>
       <video autoPlay loop muted id="video">
            <source src={Video} type='video/mp4' />
        </video> 
        <div className="overlay"></div>
        <div className="content">
          <h1>First Class Travel</h1>
          <h2>Top 1% Locations Worldwide</h2>
          <div className="form">
            <div>
              <input type="text"  placeholder='Search Detination'/>
            </div>

            <div>
              <button><AiOutlineSearch className='icons' /></button>
            </div>
          </div>
        </div>''
    </div>
  )
}

export default Hero