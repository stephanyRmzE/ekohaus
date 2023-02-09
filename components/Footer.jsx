import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiFillPhone} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-container'>
        <div className='direccion-text'>
            <h2>Dirección</h2>
            <p>Arco Sur, Campo Nuevo, 91193 Xalapa-Enríquez</p>
            </div>
        <a href="tel:551-375-4575" className='nav-call'>
            <AiFillPhone/>
            551 375 4575
        </a>
      </div>
      <div className='footer-container'>
        <p>2023 Ekohaus del Golfo All rights reserved</p>
        <p className='icons'>
          <a href="https://www.instagram.com/ekohausdelgolfo/">
          <AiFillInstagram/>
          </a>

          <a href="https://www.facebook.com/Ekohausveracruz/">
          <AiFillFacebook/>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
