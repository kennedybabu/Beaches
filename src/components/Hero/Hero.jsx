import React from 'react'
import './Hero.css';
import Video from '../../assets/beach.mp4'

function Hero() {
  return (
    <div className='hero'>
       <video autoPlay loop muted id="video">
            <source src={Video} type='video/mp4' />
        </video> 
    </div>
  )
}

export default Hero