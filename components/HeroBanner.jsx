import React, {useState, useEffect} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const HeroBanner = ({heroBanner}) => {

  const IsTabletOrPhone = useMediaQuery("(max-width:500px)");
  const [scrImg, setscrImg] = useState('/assets/cover_comp.png')

  useEffect(() => {
    if (IsTabletOrPhone) {
      setscrImg("/assets/hero_1.png");

    } else {
      setscrImg("/assets/cover_comp.png");

    } }, [IsTabletOrPhone, scrImg])

  const style = {
    backgroundImage: `url(${scrImg})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  };


  return (

    <div>
      <div className='hero-banner-container' style={style}>
        <p className="hero-small-title">{heroBanner.smallText}</p>
        <h3 className='hero-title'>{heroBanner.midText}</h3>

      </div>

    </div>
  )


}


export default HeroBanner
