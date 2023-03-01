import React, {useState, useEffect} from 'react'
import {client} from '../lib/client.js'
import { Product} from '../components/index'
import { useRouter } from 'next/router';

const murosVerdes = ({products}) => {
  const router = useRouter();

  // Get the query parameter from the URL
  const { q } = router.query;
  let query = "";
  if (q !== undefined) {
    query = q
  }

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      products.filter((product) =>{
        if (query == "") {
              return product
            }else if(product.name.toLowerCase().includes(query.toLowerCase())){
              return product
            }
          }
      )
    );
  }, [query, products]);

  return (
    <>
      <div className='products-heading'>
        <h2>Muros Verdes Artificiales HDPE</h2>
        <p>Ideales para usos interiores y exteriores. Pueden utilizarse para proteger y recubrir bardas de concreto</p>
      </div>
      <div className="categoryContainer">
        <div className='categoryDiv'>
          {filtered?.map((product) =>
            <div className='productDiv'>
              <Product key={product._id} product = {product}/>
            </div>
            )}
        </div>
      </div>
    </>
  )
}



export async function getStaticProps() {
  // Fetch data from external API

  const productsQuery = '*[_type == "muros"]'
  const products = await client.fetch(productsQuery)

  return { props: { products } }
}

export default murosVerdes
