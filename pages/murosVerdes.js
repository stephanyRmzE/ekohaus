import React from 'react'
import {client} from '../lib/client.js'
import { Product} from '../components/index'


function MurosVerdes({products}) {

  return (
    <div>
      <div className='products-heading'>
        <h2>Muros Verdes Artificiales HDPE</h2>
          <div className="categoryContainer">
            <div className='categoryDiv'>
              {products?.map((product) =>
              <div className="categoryProduct" key={product._id} >
                  <Product product = {product} />
              </div>
                )}
            </div>
          </div>

      </div>

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
