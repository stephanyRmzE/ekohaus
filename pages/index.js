import React from 'react'
import {client} from '../lib/client.js'
import { Product, FooterBanner, HeroBanner} from '../components/index'
import useEmblaCarousel from 'embla-carousel-react'
import {useStateContext} from '../context/StateContext'

const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }

const index = ({ murosData, pastosData,  bannerData } ) => {
  const [emblaRef] = useEmblaCarousel(OPTIONS)


  return (
    <div>

      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Muro Verde Artificial</h2>
        <p>Ideales para usos interiores y exteriores. Pueden utilizarse para proteger y recubrir bardas de concreto</p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {murosData?.map((product) =>
              <Product key={product._id} product = {product}/>
            )}

          </div>
        </div>
      </div>

      <div className='products-heading'>
        <h2>Pasto Sintetico</h2>
        <p>Renueva tu entrada o jardín con nuestros diferentes modelos de apariencia  y sensación de un jardín natural, libre de mantenimiento.</p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {pastosData?.map((product) =>
              <Product key={product._id} product = {product}/>
            )}

          </div>
        </div>
      </div>

    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const murosQuery = '*[_type == "muros"]'
  const murosData = await client.fetch(murosQuery)

  const pastosQuery = '*[_type == "pasto"]'
  const pastosData = await client.fetch(pastosQuery)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  // Pass data to the page via props
  return { props: { murosData, pastosData, bannerData } }
}


export default index
