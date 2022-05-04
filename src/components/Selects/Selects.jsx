import React from 'react'
import './Selects.css'
import Italy from '../../assets/italy.jpg'
import Bali from '../../assets/bali.jpg'
import Travel1 from '../../assets/travl1.jpg'
import Travel2 from '../../assets/travl2.jpg'
import Travel from '../../assets/trvl.jpg'
import Maldives from '../../assets/maldives3.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
  return (
    <div className='selects'>
       <div className="container">
       <SelectsImg bgImg={Bali} text='Bali' />
        <SelectsImg bgImg={Italy} text='Italy' />
        <SelectsImg bgImg={Travel1} text='Maldives' />
        <SelectsImg bgImg={Travel} text='Morocco' />
        <SelectsImg bgImg={Travel2} text='Nyali' />
        <SelectsImg bgImg={Maldives} text='Jurassic' />
       </div>
    </div>
  )
}

export default Selects