import React, {useState, useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const HeroBanner = ({heroBanner}) => {

  const IsTabletOrPhone = useMediaQuery("(max-width:500px)");
  const [bannerImg, setBannerImg] = useState('')
useEffect(() => {
  if (IsTabletOrPhone) {
    const img = heroBanner.image[1].asset._ref;
    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
    setBannerImg(newImage);
  } else {
    const img = heroBanner.image[0].asset._ref;
    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
    setBannerImg(newImage);
  }
}, [IsTabletOrPhone, heroBanner])

  return (
    <div>

      <div className='hero-banner-container'
          style={{
                    backgroundImage: `url(${bannerImg})`,
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
