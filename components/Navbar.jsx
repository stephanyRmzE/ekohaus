import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'

import {Cart} from './'
import {useStateContext} from '../context/StateContext'

export const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href='/'>
          <img src='/assets/ekohaus_logo.png' alt="logo ekohaus" />
        </Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}
