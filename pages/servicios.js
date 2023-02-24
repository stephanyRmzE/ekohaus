import React from 'react'
import {client} from '../lib/client.js'
import { urlFor} from '../lib/client'

const Servicios = ({cocina}) => {
  const {image, name} = cocina;
  return (
    <div className='servicios-container'>

      <h1>Cocinas integrales a la medida</h1>

      <img
              src={urlFor(image && image[0])}
              className="product-detail-image" />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const  cocinaQuery = `*[_type == "gallery" && slug.current == 'cocinas'][0]`
  const cocina = await client.fetch(cocinaQuery)


  return { props: { cocina } }
}

export default Servicios
