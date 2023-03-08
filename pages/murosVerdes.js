import React, {useState, useEffect} from 'react'
import {client} from '../lib/client.js'
import { Product} from '../components/index'
import { useRouter } from 'next/router';


function MurosVerdes({products}) {
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

  const returnFilter = () => {

      if (filtered.length === 0) {
        return (
        <div className='products-heading'>
          <h3>No se encontro su busqueda</h3>
        </div>
        )
      } else {
        return (
          <div className="categoryContainer">
            <div className='categoryDiv'>
              {filtered?.map((product) =>
              <div className="categoryProduct" key={product._id} >
                  <Product product = {product} />
              </div>
                )}
            </div>
          </div>
        )
      }
    }
  return (
    <div>
      <div className='products-heading'>
        <h2>Muros Verdes Artificiales HDPE</h2>

      </div>

      {returnFilter()}
    </div>
  )
}



export async function getStaticProps() {
  // Fetch data from external API

  const productsQuery = '*[_type == "muros"] | order(lower(name) asc)'
  const products = await client.fetch(productsQuery)

  return { props: { products },revalidate: 10}
}

export default MurosVerdes
