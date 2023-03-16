import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Product({ product }) {
  const {image, name, price, _type, slug} = product;
  const myLoader = ({ src, width, quality }) => {
  const newImage = src.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
  return `${newImage}?w=${width}&q=${quality || 75}`
  }

  return (
     <div>
      <Link href={`/${_type}/${slug.current}`} passHref>
        <div className='product-card'>
          <Image
          loader={myLoader}
          src ={image[0].asset._ref}
          alt={name}
          width = {250}
          height = {250}
          loading="eager"
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
