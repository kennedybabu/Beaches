import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel'
import Travel2 from '../../assets/travl2.jpg'
import Travel from '../../assets/trvl.jpg'
import Maldives from '../../assets/maldives3.jpg'

function Carousel() {
  return (
    <Carousel>
        <div>
            <img src={Travel2} alt="/" />
            <p>legend</p>
        </div>
        <div>
            <img src={Travel} alt="/" />
        </div>
        <div>
            <img src={Maldives} alt="/" />
        </div>
    </Carousel>
  )
}

export default Carousel