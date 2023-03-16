import React, { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import {client} from '../lib/client.js'

const Context = createContext()

export const StateContext = (({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [foundCartItems, setFoundCartItems] = useState([]);

  let foundProduct

  function upCartItems(foundProduct, val) {
    const newCartItems = cartItems.map((cartProduct) => {
      if (cartProduct._id === foundProduct._id)  {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + val}
      }else{
        return cartProduct;
      }
    })
    return newCartItems
  }

  const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find((item) => item._id === product._id)
    if (product.stock > quantity ) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + (product.price * quantity))
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + product.quantity)

      if (checkProductInCart) {
        setCartItems(upCartItems(product, quantity));

      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, {...product}]);
      }
      toast.success(`${qty} ${product.name} agregado al carrito`, {position: "top-center"});
    }else {
      toast.error('No hay sufiente producto en stock para esta compra', {
        position: "top-center",
      });
    }

  }

  const onRemove = (id) => {
    foundProduct = cartItems.find((item) => item._id === id)
    const deleteProductInCart = cartItems.filter(cartProduct => cartProduct._id != foundProduct._id)

    setCartItems(deleteProductInCart)
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (foundProduct.price * foundProduct.quantity) )
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
  }

  const toogleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)

    if (value === 'inc') {
      setCartItems(upCartItems(foundProduct, 1))
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price )
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)

    }else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems(upCartItems(foundProduct, -1))
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price )
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }

    }


  }


  const  incQty= () => {

    setQty((prevQty) => {
      if (prevQty >= 14) return 15;
      return prevQty + 1
    });
  }

  const  decQty= () => {
    setQty((prevQty) => {
      if (prevQty <= 1) return 0;
      return prevQty - 1
    });
  }

  const findCartItems= () => {
    setFoundCartItems([...cartItems])
  }




  return(
    <Context.Provider
      value ={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toogleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        foundCartItems,
        setFoundCartItems,
        findCartItems,
      }}
      >
      {children}
    </Context.Provider>
  )

})

export const useStateContext = () => useContext(Context)
