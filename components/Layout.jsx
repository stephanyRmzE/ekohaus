import React, {useEffect} from 'react'
import Head from 'next/head'
import { Navbar } from './Navbar'
import Footer from './Footer'
import {useStateContext} from '../context/StateContext'

const Layout = ({children}) => {
  const { cartItems, setCartItems, totalPrice, setTotalPrice, totalQuantities, setTotalQuantities} = useStateContext();

  useEffect(() => {
    const cartItemsLS = JSON.parse(window.localStorage.getItem('cart_items_ekohaus')) ?? [] ;
    setCartItems(cartItemsLS);
    const totalPriceLS = JSON.parse(window.localStorage.getItem('total_price_ekohaus')) ?? 0 ;
    setTotalPrice(totalPriceLS);
    const totalQuantitiesLS = JSON.parse(window.localStorage.getItem('total_quantities_ekohaus')) ?? 0 ;
    setTotalQuantities(totalQuantitiesLS);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart_items_ekohaus', JSON.stringify(cartItems));
    window.localStorage.setItem('total_price_ekohaus', JSON.stringify(totalPrice));
    window.localStorage.setItem('total_quantities_ekohaus', JSON.stringify(totalQuantities));

  }, [cartItems, totalPrice, totalQuantities])
  return (
    <div className='layout'>
      <Head>
        <title>Ekohaus del Golfo</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
