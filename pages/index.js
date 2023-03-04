import React, {useState} from 'react'
import {client} from '../lib/client.js'
import { Product, HeroBanner, Show} from '../components/index'
import useEmblaCarousel from 'embla-carousel-react'

const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }

export default function Index({ murosData,  bannerData, galleryShow } ) {
  const [emblaRef] = useEmblaCarousel(OPTIONS)
  const [loading, setLoading] = useState(true);

  if (bannerData.length > 0) {
    setLoading(false)
  }

  return (
    <div>
      <p>hola</p>
      {loading ? (
        <Spinner />
      ):
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
      }
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
      <Show galleryShow = {galleryShow[0]}/>


    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const murosQuery = '*[_type == "muros"]'
  const murosData = await client.fetch(murosQuery)


  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  const galleryQuery = '*[_type == "gallery" && name == "showRoom"]'
  const galleryShow = await client.fetch(galleryQuery)

  // Pass data to the page via props
  return { props: { murosData, bannerData, galleryShow} }
}

