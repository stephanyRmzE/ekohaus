import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {client} from '../../lib/client'
import Product from '../../components/Product'
import {useStateContext} from '../../context/StateContext'
import Image from 'next/image'

const MurosDetails = ({ product, products }) => {
  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd} = useStateContext();

  const myLoader = ({ src, width, quality }) => {
  const newImage = src.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
  return `${newImage}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div >
          <div className="image-container">
            <Image
              alt={name}
              loader={myLoader}
              src={image[index].asset._ref}
              width={500}
              height={500}
              loading="eager"
              className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item,i) => (
              <Image
                alt={name}
                key={i}
                loader={myLoader}
                src={item.asset._ref}
                width={100}
                height={100}
                className={i === index ?
                  'small-image selected-image' :
                  'small-image'}
                onMouseEnter={()=>setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Descripcion:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Cantidad:</h3>
            <p className="quantity-desc">
              <span className="minus"
                onClick={decQty}><AiOutlineMinus/></span>
              <span className="num" >{qty}</span>
              <span className="plus"
                onClick={incQty}><AiOutlinePlus/></span>
            </p>
          </div>

          <button
            type='button'
            className="btn-yellow"
            onClick={() => onAdd(product, qty)}
            >
              Agregar al Carrito
          </button>

        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Tambien podria interesarte</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item}/>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const Query = `*[_type == "muros"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(Query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {

    paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params: {slug}}) {
  // Fetch data from external API
  const productQuery = `*[_type == "muros" && slug.current == '${slug}'][0]`
  const product = await client.fetch(productQuery)

  const productsQuery = '*[_type == "muros"]'
  const products = await client.fetch(productsQuery)

  return { props: { product, products } ,revalidate: 10}
}

export default MurosDetails
