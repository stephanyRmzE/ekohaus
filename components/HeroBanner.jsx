import React, {useState, useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image'

const HeroBanner = ({heroBanner}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const IsTabletOrPhone = useMediaQuery("(max-width:500px)");
  const [bannerImg, setBannerImg] = useState('')
  const [scrImg, setscrImg] = useState('/assets/hero_1.png')

  useEffect(() => {
    if (IsTabletOrPhone) {
      setscrImg("/assets/hero_1.png");
      const img = heroBanner.image[1].asset._ref;
      const newImage = img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
      setBannerImg(newImage);
    } else {
      setscrImg("/assets/cover_comp.png");
      const img = heroBanner.image[0].asset._ref;
      const newImage = img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
      setBannerImg(newImage);
    } }, [IsTabletOrPhone, heroBanner])

  const myLoader = ({ src, width, quality }) => {
  return bannerImg
  }

  return (

    <div>
      <div className='hero-banner-container' style={style}>
        <p className="hero-small-title">{heroBanner.smallText}</p>
        <h3 className='hero-title'>{heroBanner.midText}</h3>

        <Image
          alt='cover'
          src={scrImg}
          width={0}
          height={0}
          priority={true}
          />
      </div>
    </div>
  )


}


export default HeroBanner
