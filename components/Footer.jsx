import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiFillPhone, AiOutlineWhatsApp} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="footer">

      <div className='footer-info'>
        <div className='footer-text'>
            <h2>Dirección</h2>
            <p>KM1 carretera las Trancas Estanzuela,<br></br>
               Las Trancas, México C.P 91637</p>
        </div>
        <div className='footer-text'>
            <h2>Telefonos</h2>
            <div className='footer-phones'>
              <a href="tel:228-299-8296" className='nav-call'><AiFillPhone/> 228 299 8296</a>
              <a href="https://wa.me/+522281218934" className='nav-call'><AiOutlineWhatsApp/> 228 121 8934</a>
            </div>
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
