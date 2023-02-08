import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div>

      <div className='hero-banner-container'
           style={{
                    backgroundImage: `url(${(urlFor(heroBanner.image))})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat'
                  }}>
        <p className="hero-small-title">{heroBanner.smallText}</p>
        <h3 className='hero-title'>{heroBanner.midText}</h3>
      </div>
    </div>
  )
}

export default HeroBanner
