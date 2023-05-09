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
      const img = heroBanner.image[1].asset._ref;
      const newImage = img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
      setscrImg("/assets/hero_1.png");
      setBannerImg(newImage);
    } else {
      const img = heroBanner.image[0].asset._ref;
      const newImage = img.replace('image-', 'https://cdn.sanity.io/images/wej343gq/production/').replace('-png', '.png');
      setscrImg("/assets/cover_comp.png");
      setBannerImg(newImage);
    } }, [IsTabletOrPhone, heroBanner])

  const myLoader = ({ src, width, quality }) => {
  return bannerImg
  }



  const style = {
    backgroundImage: `url(${isLoading ? '/assets/cover_comp.png' : bannerImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  };


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
          onLoad={handleLoad}
          />
      </div>

    </div>
  )


}


export default HeroBanner
