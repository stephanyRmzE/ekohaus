import React, {useState,useEffect} from 'react'
import {urlFor} from '../lib/client'
import Image from 'next/image'

const Show = ({ galleryShow:{image}}) => {

  const [photos, setPhotos] = useState([])


  useEffect(() => {
    setPhotos(image?.map((item,i) => {
      const img = item.asset._ref;
      return img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
      }))}, []);
  const sanityIoImageLoader = ({ src, quality }) => {
  return `https://cdn.sanity.io/images/wej343gq/production/${src}&q=${quality || 75}`
}

  return (
      <>
      <h1 className="showHeader">
        Nuestros Trabajos
      </h1>
      <div className="showColumns">
            {photos?.map((item,i) => (

                  <Image
                    key={i}
                    src={item}
                    width='100'
                    height='100'
                    objectFit='fill'
                  />

            ))}
          </div>

      </>
  )
}



export default Show
