import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'



export const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href='/'>
          <img src='/assets/ekohaus_logo.png' alt="logo ekohaus" />
        </Link>
      </p>

      <button type='button'
              className='cart-icon'
              onClick=''>
                <AiOutlineShopping/>
                <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}
