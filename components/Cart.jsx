import React, {useRef} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti'
import { toast } from "react-hot-toast";
import {useStateContext} from '../context/StateContext'
import {urlFor} from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toogleCartItemQuantity, onRemove} = useStateContext()
  const handleCheckout = async () => {

    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Redireccionando')

    stripe.redirectToCheckout({sessionId: data.id})

  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className="cart-container">
        <div className="cart-heading-container">
          <button
            type='button'
            className="cart-heading"
            onClick={() =>setShowCart(false) }>
              <AiOutlineLeft/>
              <span className='heading'>Tu carrito</span>
              <span className="cart-num-items">({totalQuantities} Productos)</span>
          </button>
        </div>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={100} />
            <p>Tu carrito está vacío</p>
            <button
            type='button'
            className="btn-yellow"
            onClick={() =>setShowCart(false) }>
              Continua comprando
          </button>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >=1 && cartItems.map((item, index)=> (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])}  alt = 'product' className='cart-product-image'  />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item?.name}</h5>
                  <h4>${item?.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() =>
                      toogleCartItemQuantity(item._id, 'dec')}>
                        <AiOutlineMinus/>
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span className="plus" onClick={() =>
                      toogleCartItemQuantity(item._id, 'inc')}>
                        <AiOutlinePlus/>
                      </span>
                    </p>
                  </div>
                  <button type='button'className="remove-item" onClick={() => findCartItems()} >
                    <TiDeleteOutline/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >=1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type='button'className="btn-yellow" onClick={handleCheckout}>
                Pagar
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
