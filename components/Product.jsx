import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { urlFor} from '../lib/client'



function Product({ product }) {
  const {image, name, price, _type, slug} = product;

  return (
     <div>
      <Link href={`/${_type}/${slug.current}`} passHref>
        <div className='product-card'>
          <img
          src={urlFor( image && image[0])}
          alt={name}
          width = {250}
          height = {250}
          className = 'product-image'
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
