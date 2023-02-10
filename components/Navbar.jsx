import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import {Cart} from './'
import {useStateContext} from '../context/StateContext'


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

      <div className="menu-icons" onClick={handleClick}>
            <i className={click ? 'fas fa-times navbar-more' : 'navbar-more fas fa-bars'}></i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li  >
              <Link
              href='/'
              >Acerca de Nosotros</Link>
            </li>
            <li >
              <Link
              href='/'
            >Servicios</Link>
            </li>

            <li  >
              <Link
              href='/'
            >Contactanos</Link>
            </li>

          </ul>



      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>


  )
}
