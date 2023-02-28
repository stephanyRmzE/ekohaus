import React, {useState, useRef} from 'react'
import Link from 'next/link'
import {AiOutlineShopping, AiOutlineSearch} from 'react-icons/ai'
import {Cart} from './'
import {useStateContext} from '../context/StateContext'
import { FaBars, FaTimes } from 'react-icons/fa';




export const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };


  return (

    <div className="navbar">

      <p className='logo'>
        <Link href='/'>
          <img src='/assets/ekohaus_logo.png' alt="logo ekohaus" />
        </Link>
      </p>


        <div className='nav-links-cart'>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li className='nav-search'>

              <form id="search" method="get" action="">
                <input type="text" class="search-txt-input" name="q" maxlength="100"/>
                <button type="submit" form="search"  class="search-button">
                  <AiOutlineSearch className='search-icon' />
                </button>
	            </form>
            </li>

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
