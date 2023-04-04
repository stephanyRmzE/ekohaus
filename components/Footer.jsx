import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiFillPhone} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="footer">

      <div className='footer-info'>
        <div className='footer-text'>
            <h2>Dirección</h2>
            <p>Circuito arco sur 102 col. Lomas verdes Xalapa,Veracruz.</p>
        </div>
        <div className='footer-text'>
            <h2>Telefono</h2>
            <a href="tel:228-106-5003" className='nav-call'>
              <AiFillPhone/>
              228 106 5003
            </a>
        </div>
      </div>
      <div className='footer-container'>
        <p>2023 Ekohaus del Golfo All rights reserved</p>
        <p>Siguenos en redes sociales</p>
        <p className='icons'>
          <a target="_blank" href="https://www.instagram.com/ekohausdelgolfo/" rel="noopener noreferrer">
          <AiFillInstagram/>
          </a>

          <a target="_blank"  href="https://www.facebook.com/Ekohausveracruz/" rel="noopener noreferrer">
          <AiFillFacebook/>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
