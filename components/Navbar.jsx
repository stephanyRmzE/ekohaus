import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineShopping, AiOutlineSearch} from 'react-icons/ai'
import {Cart} from '.'
import {useStateContext} from '../context/StateContext'
import { FaBars, FaTimes } from 'react-icons/fa';
import {useRouter} from 'next/router'
import Image from 'next/image'

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const router = useRouter();


  return (

    <div className="navbar">

      <p className='logo'>
        <Link href='/' passHref >
          <a>
            <Image src='/assets/ekohaus_logo.png' alt="logo ekohaus" width={100} height={50}/>
          </a>
        </Link>


      </p>


        <div className='nav-links-cart'>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li className='dropdown' onClick={handleClick}>


              <Link href='/contact' passHref >
                <a className={router.pathname == "/contact" ? " nav-links linkActive" : "nav-links"}>
                  Contactanos
                </a>
              </Link>

              <div className="dropdown-content">
                <Link href='/factura' passHref >
                  <a className ="dropdown-link">
                    Facturas
                  </a>
                </Link>
              </div>

            </li>

            <li className='dropdown' onClick={handleClick}>

              <Link href='/murosVerdes' passHref  >
                <a className={router.pathname == "/murosVerdes" ? "nav-links linkActive" : "nav-links"}>
                  Productos
                </a>
              </Link>

              <div className="dropdown-content">
                <Link href='/instalacion' passHref >
                  <a className ="dropdown-link">
                    Instalacion
                  </a>
                </Link>
              </div>

            </li>

            <li  onClick={handleClick} >
              <Link passHref href='/nosotros' >
                <a className={router.pathname == "/nosotros" ? "nav-links linkActive" : "nav-links"}>
                  Nosotros
                </a>
              </Link>
            </li>

            <li onClick={handleClick} >
              <Link passHref href='/servicios'>
                <a className={router.pathname == "/servicios" ? "nav-links linkActive" : "nav-links"}>
                  Servicios
                </a>
              </Link>
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

export default Navbar
