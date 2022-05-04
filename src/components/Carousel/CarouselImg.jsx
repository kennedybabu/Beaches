import React from 'react'
import './CarouselImg.css'
import { Carousel } from 'react-responsive-carousel'
import Travel2 from '../../assets/travl2.jpg'
import Travel from '../../assets/trvl.jpg'
import Maldives from '../../assets/maldives3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselImg() {
  return (
    <div className="container">
       <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={Travel2} alt="/" />
        </div>
        <div>
            <img src={Travel} alt="/" />
        </div>
        <div>
            <img src={Maldives} alt="/" />
        </div>
      </Carousel>
    </div>
   
  )
}

export default CarouselImg