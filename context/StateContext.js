import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = (({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

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

    setTotalPrice((prevTotalPrice) => prevTotalPrice + (product.price * quantity))
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + product.quantity)

    if (checkProductInCart) {
      setCartItems(upCartItems(product, quantity));

    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}]);
    }
    toast.success(`${qty} ${product.name} agregado al carrito`);
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
    setQty((prevQty) => prevQty + 1);
  }

  const  decQty= () => {
    setQty((prevQty) => {
      if (prevQty <= 1) return 0;
      return prevQty - 1
    });
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
        setTotalQuantities
      }}
      >
      {children}
    </Context.Provider>
  )

})

export const useStateContext = () => useContext(Context)
