import React from 'react'
import {client} from '../lib/client.js'
import Image from 'next/image'

function Servicios({cocina}) {
  const {image, name} = cocina;
  const myLoader = ({ src, width, quality }) => {
  const newImage = src.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
  return `${newImage}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className='servicios-container'>

      <h1>Cocinas integrales a la medida</h1>

      <Image
        alt={name}
        loader={myLoader}
        src={image[[0]].asset._ref}
        width={500}
        height={500}
         />
    </div>
  )
}




export default Servicios
