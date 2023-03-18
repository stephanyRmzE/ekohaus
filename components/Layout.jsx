import React, {useEffect} from 'react'
import Head from 'next/head'
import Navbar  from './Navbar'
import Footer from './Footer'
import {useStateContext} from '../context/StateContext'


const Layout = ({children}) => {

  function addPageJsonLd(){
    return{
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Store",
      "name": "Ekohaus del golfo",
      "description": "Los mejores en diseño y venta de jardines verticales interiores y exteriores. Mas de 30 estilos de muros verdes. Facil modo de compra. www.ekohausdelgolfo.com.mx",
      "url" : "https://www.ekohausdelgolfo.com.mx",
      "logo" : "/assets/ekohaus_logo.png",
      "telephone": " (228) 106-5003",
      "openingHours" : "Mo-fr 09:00-17:00, Sa 09:00-12:30",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MX",
        "addressLocality": "Xalapa, Veracruz",
        "postalCode": "91193",
        "streetAddress": "Circuito arco sur 102"
      },
      "sameAs":[
        "https://www.facebook.com/Ekohausveracruz/",
        "https://www.instagram.com/ekohausdelgolfo/"
      ]
    }
  `,
    }
  }
  const { cartItems, setCartItems, totalPrice, setTotalPrice, totalQuantities, setTotalQuantities} = useStateContext();

  useEffect(() => {
    const cartItemsLS = JSON.parse(window.localStorage.getItem('cart_items_ekohaus')) ?? [] ;
    setCartItems(cartItemsLS);
    const totalPriceLS = JSON.parse(window.localStorage.getItem('total_price_ekohaus')) ?? 0 ;
    setTotalPrice(totalPriceLS);
    const totalQuantitiesLS = JSON.parse(window.localStorage.getItem('total_quantities_ekohaus')) ?? 0 ;
    setTotalQuantities(totalQuantitiesLS);
  }, [setCartItems, setTotalPrice, setTotalQuantities ])

  useEffect(() => {
    window.localStorage.setItem('cart_items_ekohaus', JSON.stringify(cartItems));
    window.localStorage.setItem('total_price_ekohaus', JSON.stringify(totalPrice));
    window.localStorage.setItem('total_quantities_ekohaus', JSON.stringify(totalQuantities));

  }, [cartItems, totalPrice, totalQuantities])
  return (
    <div className='layout'>
      <Head>
        <title>Ekohaus del Golfo | Jardines Verticales Interiores y exteriores </title>
        <link rel="icon" href="/assets/ekohaus_logo.png" />
        <meta
          name="keywords"
          content="Muros verdes, follaje artificial, green wall, Xalapa, ekohaus del golfo" />
        <meta
          name="description"
          content="Los mejores en diseño y venta de jardines verticales interiores y exteriores. Mas de 30 estilos de muros verdes. Facil modo de compra. www.ekohausdelgolfo.com.mx"
          key="desc"
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addPageJsonLd()}
          key="product-jsonld"
        />
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
