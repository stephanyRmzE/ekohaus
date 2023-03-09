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
  const [query, setQuery] = useState('')

  const router = useRouter()

  const handleParam = setValue => e => setValue(e.target.value)

  const handleSubmit = (e) => {
     e.preventDefault();
     router.replace({
       pathname: '/murosVerdes',
       query: {q: query},
     })
   }

  return (

    <div className="navbar">

      <p className='logo'>
        <Link href='/' passHref>
          <Image src='/assets/ekohaus_logo.png' alt="logo ekohaus" width={100} height={50}/>
        </Link>
      </p>


        <div className='nav-links-cart'>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li className='nav-search'>

              <form  onSubmit={handleSubmit} >
                <input
                  id="q"
                  type="text"
                  name='q'
                  value={query}
                  onChange={handleParam(setQuery)}
                  className="search-txt-input"
                  maxLength="100"
                  />
                <button
                  type="submit"
                  className="search-button">
                  <AiOutlineSearch className='search-icon' />
                </button>
	            </form>
            </li>

            <li className='nav-links dropdown' onClick={handleClick}>

              <Link
              href='/contact' passHref
            >Contactanos</Link>

              <div className="dropdown-content">
                <Link
                  href='/factura' passHref
                  className ="dropdown-link"
                  >Facturas</Link>
              </div>

            </li>

            <li className='nav-links dropdown' onClick={handleClick}>

              <Link
              href='/murosVerdes' passHref
            >Productos</Link>

              <div className="dropdown-content">
                <Link
                  href='/instalacion' passHref
                  className ="dropdown-link"
                  >Instalacion</Link>
              </div>

            </li>

            <li className='nav-links' onClick={handleClick} >
              <Link passHref
              href='/nosotros'
            >Nosotros</Link>
            </li>

            <li className='nav-links' onClick={handleClick} >
              <Link passHref
              href='/servicios'
            >Servicios</Link>
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
