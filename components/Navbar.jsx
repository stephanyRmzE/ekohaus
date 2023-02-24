import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import {Cart} from './'
import {useStateContext} from '../context/StateContext'
import { FaBars, FaTimes } from 'react-icons/fa';




export const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (

    <div className="navbar">
      <p className='logo'>
        <Link href='/'>
          <img src='/assets/ekohaus_logo.png' alt="logo ekohaus" />
        </Link>
      </p>

        <div className='nav-links-cart'>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li className='nav-links' onClick={handleClick}>
              <Link
              href='/contact'
            >Contactanos</Link>
            </li>

            <li className='nav-links' onClick={handleClick} >
              <Link
              href='/factura'
            >Facturas</Link>
            </li>

            <li className='nav-links' onClick={handleClick} >
              <Link
              href='/servicios'
            >Servicios</Link>
            </li>

            <li className='nav-links' onClick={handleClick} >
              <Link
              href='/instalacion'
            >Instalacion</Link>
            </li>

            <li className='nav-links' onClick={handleClick} >
              <Link
              href='/'
              >Nosotros</Link>
            </li>

          </ul>


        <div className='cart-button'>
          <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
        {showCart && <Cart/>}

        <div className="menu-icons" onClick={handleClick}>
        {click ?  <FaTimes/> : <FaBars/>}

        </div>
      </div>

    </div>


  )
}
