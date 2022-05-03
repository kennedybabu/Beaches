import React from 'react'
import Italy from '../../assets/italy.jpg'
import Bali from '../../assets/bali.jpg'
import Travel1 from '../../assets/travl1.jpg'
import Travel2 from '../../assets/travl2.jpg'
import Travel from '../../assets/trvl.jpg'
import './Destinations.css'

function Destinations() {
  return (
    <div className='destinations'>
        <div className="container">
            <h1>All-Inlcusive Resorts</h1>
            <p>On the Caribbean's Best Beaches</p>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={Italy} alt="/" />
                <img src={Bali} alt="/" />
                <img src={Travel1} alt="/" />
                <img src={Travel2} alt="/" />
                <img src={Travel} alt="/" />
            </div>
        </div>        
    </div>
  )
}

export default Destinations