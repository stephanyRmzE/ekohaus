import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {useStateContext} from '../context/StateContext'
import { runConfetti } from '../lib/utils'
import { useRouter } from 'next/router';
import { getId, updateDocumentStock } from '../lib/client';
import useSWR from 'swr'

function Success() {
  const {  setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

  const {
    query: { session_id },
  } = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );



  useEffect(() => {

    data?.map((product) =>{
      (async () => {
      const id = await getId(product.description)
      const update = await updateDocumentStock(id, product.quantity)
    })()

    }
    )

    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
  }, [data, session_id, setCartItems, setTotalPrice, setTotalQuantities ])



  return (
    <div className='success-wrapper'>
      <div className="success">
        <p className="icon">
          <BsBagCheckFill/>
        </p>
        <h2>Gracias por tu orden!</h2>
        <p className="email-msg">El recibo a sido enviado a su correo electronico</p>
        <p className="description">
          Si tiene alguna duda, por favor mande un correo a
          <a href="mailto:ventas@ekohausdelgolfo.com" className="email">ventas@ekohausdelgolfo.com</a>
        </p>

        <Link href='/' passHref >
          <button type='button' width='300px' className="btn">
            Continua comprando
          </button>
        </Link>
      </div>
    </div>
  )
}



export default Success
