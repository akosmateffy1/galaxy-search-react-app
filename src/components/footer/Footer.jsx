import React from 'react'
import './FooterStyle.css'
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaSearchLocation, 
  FaMailBulk,
  FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
          <div className='location1'>
            <p>Magyarország, Pest vármegye </p>
            <h4>1036 Budapest Lajos utca 46 </h4>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />1-2000-123-123</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />help@planetsearch.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>Rólunk és a vállalatról</h4>
          <p className='right-text'>
            "lorem ipsum dolor sit amet, sconsectruer
            adipisciopt elit sed do eisumod tempor incidicdunt ut labo4
            et dolore magna aligqua ut enim ad minim velami"
          </p>
          <div className='social'>
                    <FaFacebook size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaTwitter size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaLinkedin size={20} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer