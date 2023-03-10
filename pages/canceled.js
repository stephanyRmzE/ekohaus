import React from 'react'
import {BsBagCheckFill} from 'react-icons/bs'
import Link from 'next/link'

function Canceled() {
  return (
    <div className='success-wrapper'>
      <div className="success">
        <p className="canceled-icon">
          <BsBagCheckFill/>
        </p>
        <h2>Su compra no pudo ser completada</h2>
        <p className="description">
          Si tiene alguna duda, por favor mande un correo a
          <a href="mailto:ventas@ekohausdelgolfo.com" className="email">ventas@ekohausdelgolfo.com</a>
        </p>
        <Link href='/' passHref>
          <button type='button' width='300px' className="btn">
            Continua comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled
