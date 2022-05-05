import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <h3>BEACHES.</h3>
                <div className="social">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
            <div className="bottom"></div>
        </div>

    </div>
  )
}

export default Footer