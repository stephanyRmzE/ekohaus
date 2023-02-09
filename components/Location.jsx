import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'


function Location() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });


  const center = useMemo(() => ({lat:19.505351480762858, lng: -96.89024475397346}), [])
  const mark = useMemo(() => ({lat:19.505351480762858, lng: -96.89024475397346}), [])
  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className='location-container'>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName='map-container'>
        <Marker position={mark}></Marker>
      </GoogleMap>
    </div>
  )

}

export default Location
