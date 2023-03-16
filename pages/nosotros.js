import React from 'react'
import {client} from '../lib/client.js'
import Image from 'next/image'

function nosotros({imageNosotros}) {
  const imgNosotros = imageNosotros[0]
  const {image , name} = imgNosotros
  const myLoader = ({ src, width, quality }) => {
    const newImage = src.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
    return `${newImage}?w=${width}&q=${quality || 75}`
  }

  return (

  <div className="nosotrosContainer">

    <div className="allText bottomText">
      <p className="text-blk headingText">
        Nosotros
      </p>
      <p className="text-blk description">
        Nuestra empresa empieza en el año 2013 con un proyecto arquitectónico al que queríamos darle un aire de frescura y modernidad con una apariencia natural y sin tener que pensar en mantenimiento.<br /> <br />
        Alcanzando nuestros objetivos quisimos compartir nuestra misión de cambiar espacios y transmitir la forma en la que vemos la vida, agregando color y alegría, convirtiéndonos asi en proveedores de jardines verticales, muros verdes y follaje artificial.<br /> <br />
        Nosotros nos especializamos en crear para cada proyecto un concepto de diseño de plantas elegante, único e irrepetible que resalta las características de cada estructura, mezclando diferentes follajes, colores y texturas que evocan naturaleza, dando la apariencia de ser un jardín pero en vertical.      </p>
    </div>

    <div className="ultimateImg">
      <div className='mainImg'>
        <Image
          loader={myLoader}
          src ={image[0].asset._ref}
          alt={name}
          width = {300}
          height = {300}
          className='nosotrosImg'
        />
      </div>
      <div className='secImg'>
        <Image
          loader={myLoader}
          src ={image[1].asset._ref}
          alt={name}
          width = {400}
          height = {300}
          loading="eager"
          className='nosotrosImg'
        />
      </div>
    </div>
  </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const  imgQuery = `*[_type == "gallery" && name == "nosotros"]`
  const imageNosotros = await client.fetch(imgQuery)


  return { props: { imageNosotros },
    revalidate: 10 }
}

export default nosotros
