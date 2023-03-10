import React, {useState,useEffect} from 'react'
import Image from 'next/image'

const Show = ({ galleryShow:{image}}) => {


  const myLoader = ({ src, width, quality }) => {
  const newImage = src.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
  return `${newImage}?w=${width}&q=${quality || 75}`
  }

  return (
      <>
      <h1 className="showHeader">
        Nuestros Trabajos
      </h1>
      <div className="showColumns">
            {image?.map((item,i) => (
                  <Image
                    loader={myLoader}
                    alt='nuestro trabajo'
                    key={i}
                    src={item.asset._ref}
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
